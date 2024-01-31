using MyStoreServer.Models;

namespace MyStoreServer.Services
{
    public interface IOrderService
    {
        void CreateOrder (RequestOrder order);
    }
}
