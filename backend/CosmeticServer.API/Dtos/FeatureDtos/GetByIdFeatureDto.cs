namespace CosmeticServer.API.Dtos.FeatureDtos
{
    public class GetByIdFeatureDto
    {
        public int Id { get; set; }
        public string MainTitle { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
    }
}
