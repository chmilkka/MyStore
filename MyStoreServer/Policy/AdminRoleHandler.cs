using Microsoft.AspNetCore.Authorization;
using MyStoreServer.Models;

namespace MyStoreServer.Policy
{
    public class AdminRoleHandler : AuthorizationHandler<AdminRoleRequirement>
    {
        protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, AdminRoleRequirement requirement)
            => new RequirementsBase().VerifyRole(context, requirement, Role.Admin);
    }

}
