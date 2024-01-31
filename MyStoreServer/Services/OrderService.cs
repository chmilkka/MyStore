using Azure.Core;
using MyStoreServer.DataAccess;
using MyStoreServer.Models;

namespace MyStoreServer.Services
{
    public class OrderService : IOrderService
    {
        private readonly IOrderStorage _orderStorage;
        public OrderService(IOrderStorage orderStorage)
        {
            _orderStorage = orderStorage;
        }

        public void CreateOrder(RequestOrder requestOrder)
        {
            var orderId = Guid.NewGuid();
            foreach (var id in requestOrder.ProductsId)
            {
                var order = new Order
                {
                    OrderId = orderId,
                    Id = Guid.NewGuid(),
                    UserId = requestOrder.UserId,
                    ProductId = id
                };
                _orderStorage.CreateOrder(order);
            }
        }
    }
}
