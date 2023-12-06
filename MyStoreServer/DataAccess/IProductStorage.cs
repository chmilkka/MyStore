using MyStoreServer.Models;

namespace MyStoreServer.DataAccess
{
    public interface IProductStorage
    {
        IEnumerable<Product> GetProducts();
        Product GetProduct(Guid productId);
        IEnumerable<Product> GetProductsByType(string type);
        void CreateProduct(Product product);
        void DeleteProduct(Guid productId);
    }
}
