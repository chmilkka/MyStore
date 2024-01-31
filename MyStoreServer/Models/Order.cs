namespace MyStoreServer.Models
{
    public class Order
    {
        public Guid OrderId { get; set; }
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public User User { get; set; }
        public Guid ProductId { get; set; }
        public Product Product { get; set; }
    }
}
