using MyStoreServer.Models;

namespace MyStoreServer.DataAccess
{
    public class OrderStorage : IOrderStorage
    {
        public ApplicationContext DbContext { get; set; }
        public OrderStorage(ApplicationContext dbContext)
        {
            DbContext = dbContext;
        }
        public void CreateOrder(Order order)
        {
            DbContext.Add(order);
            DbContext.SaveChanges();
        }
    }
}
