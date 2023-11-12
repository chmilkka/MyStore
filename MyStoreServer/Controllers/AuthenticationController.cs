using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using MyStoreServer.Models;
using MyStoreServer.Services;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace MyStoreServer.Controllers
{
    [Route("api/test")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly IAuthenticationService _authenticationService;
        private readonly IUserService _userService;
        public AuthenticationController(IAuthenticationService authenticationService, IUserService userService)
        {
            _authenticationService = authenticationService;
            _userService = userService;
        }

        
        [HttpPost("auth")]
        public ActionResult UserAuthentication([FromBody] LoginModel request)
        {
            var user = _authenticationService.UserVerification(request);
            var token = _authenticationService.GenerateToken(user);
            return Ok(token);
        }

        [HttpPost]
        public ActionResult CreateUser([FromBody] RegistrationModel request)
        {
            _userService.CreateUser(request);
            return Ok();
        }
    }
}
