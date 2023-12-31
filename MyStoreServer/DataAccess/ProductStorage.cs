﻿using MyStoreServer.Exceptions;
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
                ?? throw new NotFoundException(nameof(Product), nameof(productId));

            DbContext.Remove(product);
            DbContext.SaveChanges();
        }

        public Product GetProduct(Guid productId)
        {
            var product = DbContext.Products.FirstOrDefault(x => x.Id == productId)
                ?? throw new NotFoundException(nameof(Product), nameof(productId));
            return product;
        }

        public IEnumerable<Product> GetProductsByType(string type)
        {
            var product = DbContext.Products.Where(x => x.Type == type)
                ?? throw new NotFoundException(nameof(Product), nameof(type));
            return product;
        }

        public IEnumerable<Product> GetProducts()
        {
            return DbContext.Products;
        }
    }
}
