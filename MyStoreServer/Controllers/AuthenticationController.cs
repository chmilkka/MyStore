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
    [Route("api/authentication")]
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
        [HttpGet]
        public User GetAuthenticatedUserInfo()
        {
            var claims = HttpContext.User.Claims;

            if (!claims.Any())
            {
                return null;
            }

            var userId = claims.First(x => x.Type == ClaimTypes.NameIdentifier).Value;

            if (!Guid.TryParse(userId, out var id))
            {
               throw new SecurityTokenInvalidTypeException("Invalid token provided");
            }

            return _userService.GetUserById(Guid.Parse(userId));
        }


        [HttpPost("login")]
        public ActionResult UserAuthentication([FromBody] LoginModel request)
        {
            var user = _authenticationService.UserVerification(request);
            var token = _authenticationService.GenerateToken(user);
            return Ok(token);
        }

        [HttpPost("register")]
        public ActionResult CreateUser([FromBody] RegistrationModel request)
        {
            _userService.CreateUser(request);
            return Ok();
        } 
    }
}
