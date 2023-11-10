using Microsoft.EntityFrameworkCore;
using MyStoreServer.DataAccess;
using MyStoreServer.Services;

internal class Program
{
    private static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.
        string connection = builder.Configuration.GetConnectionString("DefaultConnection");
        builder.Services.AddDbContext<ApplicationContext>(options => options.UseSqlServer(connection));

        builder.Services.AddControllers();
        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();

        builder.Services.AddTransient<IProductService, ProductService>();
        builder.Services.AddScoped<IProductStorage, ProductStorage>();
        builder.Services.AddTransient<IRegistrationService, RegistrationService>();
        builder.Services.AddScoped<IUserStorage, UserStorage>();

        var app = builder.Build();

        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseHttpsRedirection();

        app.UseAuthorization();

        app.MapControllers();

        app.Run();
    }
}