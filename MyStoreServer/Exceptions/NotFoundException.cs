using MyStoreServer.Models;

namespace MyStoreServer.Exceptions
{
    public class NotFoundException : Exception
    {
        public NotFoundException(string entity, string property) : base($"{entity} with {property} was not found. ") { }
    }
}
