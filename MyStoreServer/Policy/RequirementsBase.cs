using Microsoft.AspNetCore.Authorization;
using Microsoft.IdentityModel.JsonWebTokens;
using MyStoreServer.Models;

namespace MyStoreServer.Policy
{
    public class RequirementsBase
    {
        public Task VerifyRole(AuthorizationHandlerContext context, IAuthorizationRequirement requirement, Role role)
        {
            var httpContext = (HttpContext)context.Resource!;

            if (httpContext.User.Claims.Any(x => x.Type == JwtRegisteredClaimNames.Typ && x.Value == role.ToString()))
            {
                context.Succeed(requirement);
            }

            return Task.CompletedTask;
        }
    }
}
