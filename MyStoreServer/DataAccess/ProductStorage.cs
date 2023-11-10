using MyStoreServer.Models;
using System.Threading.Tasks;

namespace MyStoreServer.DataAccess
{
    public class ProductStorage : IProductStorage
    {
        public ApplicationContext DbContext { get; set; }
        public ProductStorage(ApplicationContext dbContext)
        {
            DbContext = dbContext;
        }

        public void CreateProduct(Product product)
        {
            DbContext.Add(product);
            DbContext.SaveChanges();
        }

        public void DeleteProduct(Guid productId)
        {
            var product = DbContext.Products.FirstOrDefault(x => x.Id == productId)
                ?? throw new Exception($"Product with {productId} ID was not found. ");

            DbContext.Remove(product);
            DbContext.SaveChanges();
        }

        public Product GetProduct(Guid productId)
        {
            var product = DbContext.Products.FirstOrDefault(x => x.Id == productId)
                ?? throw new Exception($"Task with {productId} ID was not found. ");
            return product;
        }

        public IEnumerable<Product> GetProducts()
        {
            return DbContext.Products;
        }
    }
}
