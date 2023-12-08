using Microsoft.EntityFrameworkCore;
using MyStoreServer.DataAccess;
using MyStoreServer.Exceptions;
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
        public User GetUserByEmail(string email)
        {
            return _userStorage.GetUserByEmail(email);
        }
        public User GetUserById(Guid userId)
        {
            return _userStorage.GetUserById(userId);
        }
        public void CreateUser(RegistrationModel request)
        {
            var user = new User
            {
                Id = Guid.NewGuid(),
                Email = request.Email,
                Password = request.Password,
                Role = request.Role.ToString(),
                Photo = "https://anavara.com/wp-content/uploads/2020/05/blank-profile-pic.png"
            };
            _userStorage.CreateUser(user);
        }

        public void DeleteUser(Guid userId)
        {
            _userStorage.DeleteUser(userId);
        }
        public void ChangeUserProfile(UserProfileModel request)
        {
            var user = GetUserById(request.Id);
            user.FirstName = request.FirstName;
            user.LastName = request.LastName;
            user.Photo = request.Photo;
            _userStorage.SaveChanges();
        }
        public void ChangeUserPassword(Guid userId, string password)
        {
            var user = GetUserById(userId);
            user.Password = password;
            _userStorage.SaveChanges();
        }
    }
}
