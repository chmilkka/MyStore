using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyStoreServer.DataAccess;
using MyStoreServer.Models;
using MyStoreServer.Services;

namespace MyStoreServer.Controllers
{
    [Route("api/user")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [Authorize]
        [HttpPut("profile")]
        public ActionResult ChangeProfile(UserProfileModel profile)
        {
            _userService.ChangeUserProfile(profile);
            return Ok();
        }

        [Authorize]
        [HttpGet("{id}")]
        public ActionResult GetUserById([FromRoute] Guid id)
        {
            try
            {
                return Ok(_userService.GetUserById(id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
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
