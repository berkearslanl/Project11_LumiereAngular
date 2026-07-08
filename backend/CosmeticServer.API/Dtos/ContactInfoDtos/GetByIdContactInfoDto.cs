namespace CosmeticServer.API.Dtos.ContactInfoDtos
{
    public class GetByIdContactInfoDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
    }
}
