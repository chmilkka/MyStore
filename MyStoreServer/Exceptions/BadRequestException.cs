namespace MyStoreServer.Exceptions
{
    public class BadRequestException : Exception
    {
        public BadRequestException() : base("Incorrect data format.") { }
    }
}
