using MyStoreServer.DataAccess;
using MyStoreServer.Models;

namespace MyStoreServer.Services
{
    public class UserService : IUserService
    {
        private readonly IUserStorage _userStorage;
        public UserService(IUserStorage userStorage)
        {
            _userStorage = userStorage;
        }
        public User GetUser(string email)
        {
            return _userStorage.GetUser(email);
        }
        public void CreateUser(RegistrationModel request)
        {
            var user = new User
            {
                Id = Guid.NewGuid(),
                Email = request.Email,
                Password = request.Password,
                Role = request.Role.ToString(),
            };
            _userStorage.CreateUser(user);
        }

        public void DeleteUser(Guid userId)
        {
            _userStorage.DeleteUser(userId);
        }
    }
}
