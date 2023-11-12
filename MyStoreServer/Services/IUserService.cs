using MyStoreServer.Models;

namespace MyStoreServer.Services
{
    public interface IUserService
    {
        User GetUser(string email);
        void CreateUser(RegistrationModel request);
        void DeleteUser(Guid userId);
    }
}
