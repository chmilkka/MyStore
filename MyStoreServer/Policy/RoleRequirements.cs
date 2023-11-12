using Microsoft.AspNetCore.Authorization;
using MyStoreServer.Models;

namespace MyStoreServer.Policy
{
    public class AdminRoleRequirement : IAuthorizationRequirement { }

    public class UserRoleRequirement : IAuthorizationRequirement { }
    public class AdminRoleHandler : AuthorizationHandler<AdminRoleRequirement>
    {
        protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, AdminRoleRequirement requirement)
            => new RequirementsBase().VerifyRole(context, requirement, Role.Admin);
    }

    public class UserRoleHandler : AuthorizationHandler<UserRoleRequirement>
    {
        protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, UserRoleRequirement requirement)
            => new RequirementsBase().VerifyRole(context, requirement, Role.User);
    }
    public class Policies
    {
        public const string Admin = "Admin";
        public const string User = "User";
    }
}
