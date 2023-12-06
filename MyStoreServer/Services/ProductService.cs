using Azure.Core;
using MyStoreServer.DataAccess;
using MyStoreServer.Models;

namespace MyStoreServer.Services
{
    public class ProductService : IProductService
    {
        private readonly IProductStorage _productStorage;
        public ProductService(IProductStorage productStorage)
        {
            _productStorage = productStorage;
        }
        public void CreateProduct(Product request)
        {
            var product = new Product
            {
                Id = Guid.NewGuid(),
                Name = request.Name,
                Type = request.Type,
                Description = request.Description,
                Quantity = request.Quantity,
                Price = request.Price,
                Photo = request.Photo,
            };
            _productStorage.CreateProduct(product);
        }

        public void DeleteProduct(Guid productId)
        {
            _productStorage.DeleteProduct(productId);
        }

        public Product GetProduct(Guid productId)
        {
            return _productStorage.GetProduct(productId);
        }

        public IEnumerable<Product> GetProductsByType(string type)
        {
            return _productStorage.GetProductsByType(type);
        }

        public IEnumerable<Product> GetProducts()
        {
            return _productStorage.GetProducts();
        }
    }
}
