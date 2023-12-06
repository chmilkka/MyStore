using MyStoreServer.Models;

namespace MyStoreServer.Services
{
    public interface IProductService
    {
        IEnumerable<Product> GetProducts();
        Product GetProduct(Guid productId);
        IEnumerable<Product> GetProductsByType(string type);
        void CreateProduct(Product product);
        void DeleteProduct(Guid productId);
    }
}
