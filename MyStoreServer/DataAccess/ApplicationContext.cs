using Microsoft.EntityFrameworkCore;
using MyStoreServer.Models;

namespace MyStoreServer.DataAccess

{
    public class ApplicationContext: DbContext
    {
        public DbSet<Product> Products { get; set; } = null!;
        public DbSet<User> Users { get; set; } = null!;
        public ApplicationContext(DbContextOptions options) : base(options) { }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Product>()
                .Property(x => x.Id)
                .IsRequired();

            modelBuilder.Entity<User>()
                .Property(x => x.Id)
                .IsRequired();

            modelBuilder.Entity<User>()
               .HasIndex(x => x.Email)
               .IsUnique();
        }
    }
}
