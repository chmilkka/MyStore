
using MyStoreServer.Exceptions;
using System.Net;
using System.Text.Json;
using System.Web.Http;
using System.Web.Http.Filters;

namespace MyStoreServer.Middleware
{
    public class ErrorHandlingMiddleware
    {
        private readonly RequestDelegate _next;

        public ErrorHandlingMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (Exception ex)
            {
                await HandleExceptionAsync(context, ex);
            }
        }

        private static Task HandleExceptionAsync(HttpContext context, Exception exception)
        {
            HttpStatusCode status;
            var stackTrace = string.Empty;
            string message;

            var exceptionType = exception.GetType();

            if (exceptionType == typeof(NotFoundException))
            {
                message = exception.Message;
                status = HttpStatusCode.NotFound;              
            }   
            else if (exceptionType == typeof(BadRequestException))
            {
                message = exception.Message;
                status = HttpStatusCode.BadRequest;
            }
            else if (exceptionType == typeof(IncorrectCredentialsException))
            {
                message = exception.Message;
                status = HttpStatusCode.Forbidden;
            }
            else
            {
                message = "Unknown error happend";
                stackTrace = exception.StackTrace;
                status = HttpStatusCode.InternalServerError;
            }



            var exceptionResult = JsonSerializer.Serialize(new { error = message, stackTrace });
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = (int)status;

            return context.Response.WriteAsync(exceptionResult);
        }
    }
}
