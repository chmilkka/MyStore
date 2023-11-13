namespace MyStoreServer.Models
{
    public class UserProfileModel
    {
        public Guid Id { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }      
        public string? Photo { get; set; }
    }
}
