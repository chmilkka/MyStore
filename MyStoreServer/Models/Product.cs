namespace MyStoreServer.Models
{
    public class Product
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public string? Description { get; set; }
        public short Quantity { get; set; }
        public double Price { get; set; }
        public string? Photo { get; set; }

    }
}
