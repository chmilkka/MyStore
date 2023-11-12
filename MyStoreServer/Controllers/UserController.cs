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
    }
}
