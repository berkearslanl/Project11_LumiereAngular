namespace CosmeticServer.API.Dtos.FeatureDtos
{
    public class UpdateFeatureDto
    {
        public int Id { get; set; }
        public string MainTitle { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
    }
}
