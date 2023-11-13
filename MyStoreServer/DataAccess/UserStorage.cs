using MyStoreServer.Exceptions;
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
                ?? throw new NotFoundException(nameof(User), nameof(userId));

            DbContext.Remove(user);
            DbContext.SaveChanges();
        }

        public User GetUserByEmail(string email)
        {
            var user = DbContext.Users.FirstOrDefault(x => x.Email == email)
                ?? throw new NotFoundException(nameof(User), nameof(email));
            return user;
        }
        public User GetUserById(Guid userId)
        {
            var user = DbContext.Users.FirstOrDefault(x => x.Id == userId)
                ?? throw new NotFoundException(nameof(User), nameof(userId));
            return user;
        }
        public void SaveChanges()
        {
            DbContext.SaveChanges();
        }
    }
}
