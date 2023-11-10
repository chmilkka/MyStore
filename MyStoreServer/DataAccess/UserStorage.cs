using MyStoreServer.Models;

namespace MyStoreServer.DataAccess
{
    public class UserStorage : IUserStorage
    {
        public ApplicationContext DbContext { get; set; }
        public UserStorage(ApplicationContext dbContext)
        {
            DbContext = dbContext;
        }
        public void CreateUser(User user)
        {
            DbContext.Add(user);
            DbContext.SaveChanges();
        }

        public void DeleteUser(Guid userId)
        {
            var user = DbContext.Users.FirstOrDefault(x => x.Id == userId)
                ?? throw new Exception($"User with {userId} ID was not found. ");

            DbContext.Remove(user);
            DbContext.SaveChanges();
        }
    }
}
