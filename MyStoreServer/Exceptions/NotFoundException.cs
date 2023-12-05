using MyStoreServer.Models;

namespace MyStoreServer.Exceptions
{
    public class NotFoundException : Exception
    {
        public NotFoundException(string entity, string property) : base($"{entity} with such {property} was not found. ") { }
    }
}
