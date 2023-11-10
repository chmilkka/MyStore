using MyStoreServer.Models;

namespace MyStoreServer.DataAccess
{
    public interface IUserStorage
    {
        void CreateUser(User user);
        void DeleteUser(Guid userId);
    }
}
