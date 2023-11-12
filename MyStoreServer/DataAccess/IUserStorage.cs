using MyStoreServer.Models;

namespace MyStoreServer.DataAccess
{
    public interface IUserStorage
    {
        User GetUser(string email);
        void CreateUser(User user);
        void DeleteUser(Guid userId);
    }
}
