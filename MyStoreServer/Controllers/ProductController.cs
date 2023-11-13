using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyStoreServer.Models;
using MyStoreServer.Policy;
using MyStoreServer.Services;
using System.Data;

namespace MyStoreServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : Controller
    {
        private readonly IProductService _productService;
        public ProductController(IProductService tasksService)
        {
            _productService = tasksService;
        }

        [Authorize]
        [HttpGet]
        public ActionResult GetProducts()
        {
            return Ok(_productService.GetProducts());
        }

        [Authorize]
        [HttpGet("{id}")]
        public ActionResult GetProduct([FromRoute] Guid id)
        {
            try
            {
                return Ok(_productService.GetProduct(id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Authorize(Policy = Policies.Admin)]
        [HttpPost]
        public ActionResult CreateProduct([FromBody] Product request)
        {
            _productService.CreateProduct(request);
            return Ok();
        }

        [Authorize(Policy = Policies.Admin)]
        [HttpDelete("{id}")]
        public ActionResult DeleteProduct(Guid id)
        {           
            _productService.DeleteProduct(id);
            return Ok();         
        }
    }
}
