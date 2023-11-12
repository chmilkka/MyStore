using Microsoft.AspNetCore.Mvc;
using MyStoreServer.Models;

namespace MyStoreServer.Services
{
    public interface IAuthenticationService
    {
        User UserVerification(LoginModel request);
        string GenerateToken(User user);
        

    }
}
