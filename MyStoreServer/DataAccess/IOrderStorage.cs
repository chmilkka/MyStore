using MyStoreServer.Models;

namespace MyStoreServer.DataAccess
{
    public interface IOrderStorage
    {
        void CreateOrder(Order order);
    }
}
