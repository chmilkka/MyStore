﻿namespace MyStoreServer.Models
{
    public class User
    {
        public Guid Id { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string Password { get; set; }

        public string Email { get; set; }
        public string Role { get; set; }
        public string? Photo { get; set; }

    }
    public enum Role
    {
        User,
        Admin
    }

}
