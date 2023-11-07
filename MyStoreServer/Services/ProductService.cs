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
            throw new NotImplementedException();
        }

        public Product GetProduct(Guid productId)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Product> GetProducts()
        {
            throw new NotImplementedException();
        }
    }
}
