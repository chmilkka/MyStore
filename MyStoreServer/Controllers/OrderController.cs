using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyStoreServer.Models;
using MyStoreServer.Policy;
using MyStoreServer.Services;

namespace MyStoreServer.Controllers
{
    [Route("api/orders")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderService _orderService;
        public OrderController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        [Authorize]
        [HttpPost]
        public ActionResult CreateOrder([FromBody] RequestOrder requestOrder)
        {
            _orderService.CreateOrder(requestOrder);
            return Ok();
        }
    }
}
