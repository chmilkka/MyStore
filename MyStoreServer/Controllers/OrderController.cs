using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyStoreServer.Models;
using MyStoreServer.Policy;
using MyStoreServer.Services;

namespace MyStoreServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IProductService _orderService;
        public OrderController(IProductService tasksService)
        {
            _orderService = tasksService;
        }

        [Authorize]
        [HttpPost]
        public ActionResult CreateOrder([FromBody] Product request)
        {
            _orderService.CreateOrder(request);
            return Ok();
        }
    }
}
