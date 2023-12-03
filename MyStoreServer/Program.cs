using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using MyStoreServer.DataAccess;
using MyStoreServer.Middleware;
using MyStoreServer.Policy;
using MyStoreServer.Services;
using System.Net;
using System.Text;
using System.Text.Json.Serialization;

internal class Program
{
    private static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.


        string connection = builder.Configuration.GetConnectionString("DefaultConnection");
        builder.Services.AddDbContext<ApplicationContext>(options => options.UseSqlServer(connection));

        builder.Services.AddControllers().AddJsonOptions(x =>
        {
            // serialize enums as strings in api responses (e.g. Role)
            x.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
        }) ;

        builder.Services.AddCors(options =>
        {
            options.AddDefaultPolicy(builder =>
            {
                builder
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyMethod();
            });
        });
        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen(c =>
        {
            c.ResolveConflictingActions(apiDescriptions => apiDescriptions.First());
            c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
            {
                In = ParameterLocation.Header,
                Description = "Please insert JWT with Bearer into field",
                Name = "Authorization",
                Type = SecuritySchemeType.Http,
                Scheme = "Bearer"
            });

            c.AddSecurityRequirement(new OpenApiSecurityRequirement {
                {
                    new OpenApiSecurityScheme
                    {
                        Reference = new OpenApiReference
                        {
                            Type = ReferenceType.SecurityScheme,
                            Id = "Bearer"
                        }
                    },
                    new string[] { }
                }
            });
        });
            builder.Services.AddHttpContextAccessor();
            builder.Services.AddAuthentication("OAuth")
                    .AddJwtBearer("OAuth", cfg =>
                    {
                        var secret = builder.Configuration.GetValue<string>("Auth:Secret")!;
                        var myIssuer = builder.Configuration.GetValue<string>("Auth:Issuer")!;
                        var myAudience = builder.Configuration.GetValue<string>("Auth:Audience")!;
                        var secretBytes = Encoding.UTF8.GetBytes(secret);
                        var key = new SymmetricSecurityKey(secretBytes);

                        cfg.TokenValidationParameters = new TokenValidationParameters
                        {
                            ValidIssuer = myIssuer,
                            ValidAudience = myAudience,
                            IssuerSigningKey = key
                        };

                        cfg.Events = new JwtBearerEvents
                        {
                            OnChallenge = async context =>
                            {
                                context.HandleResponse();
                                context.Response.StatusCode = 401;
                                await context.Response.WriteAsync("Unauthorized");
                            }
                        };

                        cfg.Events = new JwtBearerEvents
                        {
                            OnForbidden = async context =>
                            {
                                context.Response.StatusCode = 403;
                                await context.Response.WriteAsync("You don't have permissions for this action");
                            }
                        };
                    });
        
            builder.Services.AddSingleton<IAuthorizationHandler, AdminRoleHandler>();
            builder.Services.AddSingleton<IAuthorizationHandler, UserRoleHandler>();
            builder.Services.AddAuthorization(opt =>
            {
                opt.AddPolicy(Policies.User, p => p.Requirements.Add(new UserRoleRequirement()));
                opt.AddPolicy(Policies.Admin, p => p.Requirements.Add(new AdminRoleRequirement()));
            });

            builder.Services.AddTransient<IProductService, ProductService>();
            builder.Services.AddTransient<IAuthenticationService, AuthenticationService>();
            builder.Services.AddScoped<IProductStorage, ProductStorage>();
            builder.Services.AddTransient<IUserService, UserService>();
            builder.Services.AddScoped<IUserStorage, UserStorage>();


            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }
            app.UseMiddleware<ErrorHandlingMiddleware>();
            app.UseHttpsRedirection();
            app.UseCors(builder =>
            {
                builder
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader();
            });

        app.UseAuthentication();
            app.UseAuthorization();

            app.MapControllers();

            app.Run();
    }
    
           
}