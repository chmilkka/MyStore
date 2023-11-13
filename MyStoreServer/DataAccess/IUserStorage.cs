using MyStoreServer.Models;

namespace MyStoreServer.DataAccess
{
    public interface IUserStorage
    {
        User GetUserByEmail(string email);
        User GetUserById(Guid userId);
        void CreateUser(User user);
        void DeleteUser(Guid userId);
        void SaveChanges();
    }
}
