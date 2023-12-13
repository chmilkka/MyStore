namespace MyStoreServer.Models
{
    public class RequestOrder
    { 
        public Guid UserId { get; set; }
        public IEnumerable<Guid> ProductsId { get; set; }
    }
}
