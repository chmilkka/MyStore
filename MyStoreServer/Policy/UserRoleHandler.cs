using Microsoft.AspNetCore.Authorization;
using MyStoreServer.Models;

namespace MyStoreServer.Policy
{
    public class UserRoleHandler : AuthorizationHandler<UserRoleRequirement>
    {
        protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, UserRoleRequirement requirement)
            => new RequirementsBase().VerifyRole(context, requirement, Role.User);
    }
    
}
