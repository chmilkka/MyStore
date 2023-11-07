using MyStoreServer.Models;

namespace MyStoreServer.Services
{
    public interface IProductService
    {
        IEnumerable<Product> GetProducts();
        Product GetProduct(Guid productId);
        void CreateProduct(Product product);
        void DeleteProduct(Guid productId);
    }
}
