using Microsoft.AspNetCore.Mvc;
using MyStoreServer.Models;
using MyStoreServer.Services;

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

        [HttpGet]
        public ActionResult GetProducts()
        {
            return Ok(_productService.GetProducts());
        }

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

        [HttpPost]
        public ActionResult CreateProduct([FromBody] Product request)
        {
            _productService.CreateProduct(request);
            return Ok();
        }
        
        
        [HttpDelete("{id}")]
        public ActionResult DeleteProduct(Guid id)
        {
            try
            {
                _productService.DeleteProduct(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
