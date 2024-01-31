using Microsoft.EntityFrameworkCore;
using MyStoreServer.Models;

namespace MyStoreServer.DataAccess

{
    public class ApplicationContext: DbContext
    {
        public DbSet<Product> Products { get; set; } = null!;
        public DbSet<User> Users { get; set; } = null!;

        public DbSet<Order> Orders { get; set; } = null!;
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

            modelBuilder.Entity<Order>()
                .HasKey(x => x.Id);

            modelBuilder.Entity<Order>()
                .HasIndex(x => x.UserId);

            modelBuilder.Entity<Order>()
                .HasIndex(x => x.ProductId);

            modelBuilder.Entity<Order>()
                .HasOne<User>(o => o.User)
                .WithMany()
                .HasForeignKey(o => o.UserId);

            modelBuilder.Entity<Order>()
                .HasOne<Product>(o => o.Product)
                .WithMany()
                .HasForeignKey(o => o.ProductId);

        }
    }
}
