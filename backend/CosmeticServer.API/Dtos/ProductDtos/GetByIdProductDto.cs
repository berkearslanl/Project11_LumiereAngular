using CosmeticServer.API.Dtos.CategoryDtos;

namespace CosmeticServer.API.Dtos.ProductDtos
{
    public class GetByIdProductDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ImageUrl { get; set; }
        public decimal Price { get; set; }

        public int CategoryId { get; set; }
        public ResultCategoryDto Category { get; set; }
    }
}
