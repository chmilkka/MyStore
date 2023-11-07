using MyStoreServer.Models;

namespace MyStoreServer.DataAccess
{
    public interface IProductStorage
    {
        IEnumerable<Product> GetProducts();
        Product GetProduct(Guid productId);
        void CreateProduct(Product product);
        void DeleteProduct(Guid productId);
    }
}
