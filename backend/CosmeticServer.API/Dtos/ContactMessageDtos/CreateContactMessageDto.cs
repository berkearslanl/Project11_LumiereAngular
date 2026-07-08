namespace CosmeticServer.API.Dtos.ContactMessageDtos
{
    public class CreateContactMessageDto
    {
        public string Fullname { get; set; }
        public string Email { get; set; }
        public string MessageDetail { get; set; }
        public DateTime SendDate { get; set; }
    }
}
