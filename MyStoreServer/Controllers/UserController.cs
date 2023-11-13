using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyStoreServer.DataAccess;
using MyStoreServer.Models;
using MyStoreServer.Services;

namespace MyStoreServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [Authorize]
        [HttpPatch("profile")]
        public ActionResult ChangeProfile(UserProfileModel profile)
        {
            _userService.ChangeUserProfile(profile);
            return Ok();
        }

        [Authorize]
        [HttpPatch("pass")]
        public ActionResult ChangePassword(Guid userId, string password)
        {
            _userService.ChangeUserPassword(userId, password);
            return Ok();
        }
    }
}
