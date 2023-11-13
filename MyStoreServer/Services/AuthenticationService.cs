using Azure.Core;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.JsonWebTokens;
using Microsoft.IdentityModel.Tokens;
using MyStoreServer.DataAccess;
using MyStoreServer.Exceptions;
using MyStoreServer.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace MyStoreServer.Services
{
    public class AuthenticationService : IAuthenticationService
    {
        private readonly string secret;
        private readonly string myIssuer;
        private readonly string myAudience;

        private readonly IUserStorage _userStorage;
        public AuthenticationService(IConfiguration configuration, IUserStorage userStorage)
        {                   
            secret = configuration.GetValue<string>("Auth:Secret")!;
            myIssuer = configuration.GetValue<string>("Auth:Issuer")!;
            myAudience = configuration.GetValue<string>("Auth:Audience")!;
            _userStorage = userStorage;
        }
        public User UserVerification(LoginModel request)
        {
            var user = _userStorage.GetUserByEmail(request.Email);
            if (user.Password == request.Password)
            {
                return user;
            }
            throw new BadRequestException();
        }
        public string GenerateToken(User user)
        {            
            var mySecurityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secret));
            var tokenHandler = new JwtSecurityTokenHandler();
            
            var signingCreds = new SigningCredentials(mySecurityKey, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: myIssuer,
                audience: myAudience,
                claims: new List<Claim>()
                {
                    new Claim(Microsoft.IdentityModel.JsonWebTokens.JwtRegisteredClaimNames.Typ, user.Role),
                    new Claim(Microsoft.IdentityModel.JsonWebTokens.JwtRegisteredClaimNames.Sub, user.Id.ToString())
                },
                expires: DateTime.Now.AddDays(7),
                signingCredentials: signingCreds
            );
            return tokenHandler.WriteToken(token);
        }

        
    }
}
