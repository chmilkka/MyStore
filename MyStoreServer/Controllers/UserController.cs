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
        private readonly IRegistrationService _registrationService;
        public UserController(IRegistrationService registrationService)
        {
            _registrationService = registrationService;
        }

        [HttpPost]
        public ActionResult CreateUser([FromBody] RegistrationModel request)
        {
            _registrationService.CreateUser(request);
            return Ok();
        }
    }
}
