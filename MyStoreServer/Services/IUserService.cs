using MyStoreServer.Models;

namespace MyStoreServer.Services
{
    public interface IUserService
    {
        User GetUserByEmail(string email);
        User GetUserById(Guid userId);
        void CreateUser(RegistrationModel request);
        void DeleteUser(Guid userId);
        void ChangeUserProfile(UserProfileModel request);
        void ChangeUserPassword(Guid userId, string password);
    }
}
