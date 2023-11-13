using Microsoft.AspNetCore.Authorization;
using MyStoreServer.Models;

namespace MyStoreServer.Policy
{
    public class AdminRoleRequirement : IAuthorizationRequirement { }

    public class UserRoleRequirement : IAuthorizationRequirement { }
    
}
