using AutoMapper;
using CosmeticServer.API.Data.Entities;
using CosmeticServer.API.Dtos.AboutDtos;
using CosmeticServer.API.Dtos.CategoryDtos;
using CosmeticServer.API.Dtos.ProductDtos;
using CosmeticServer.API.Dtos.TestimonialDtos;
using CosmeticServer.API.Dtos.ContactInfoDtos;
using CosmeticServer.API.Dtos.ContactMessageDtos;
using CosmeticServer.API.Dtos.FeatureDtos;

namespace CosmeticServer.API.Mapper
{
    public class Mapping:Profile
    {
        public Mapping()
        {
            CreateMap<About, ResultAboutDto>().ReverseMap();
            CreateMap<About, UpdateAboutDto>().ReverseMap();
            CreateMap<About, CreateAboutDto>().ReverseMap();
            CreateMap<About, GetByIdAboutDto>().ReverseMap();

            CreateMap<Category, ResultCategoryDto>().ReverseMap();
            CreateMap<Category, UpdateCategoryDto>().ReverseMap();
            CreateMap<Category, CreateCategoryDto>().ReverseMap();
            CreateMap<Category, GetByIdCategoryDto>().ReverseMap();

            CreateMap<Product, ResultProductDto>().ReverseMap();
            CreateMap<Product, UpdateProductDto>().ReverseMap();
            CreateMap<Product, CreateProductDto>().ReverseMap();
            CreateMap<Product, GetByIdProductDto>().ReverseMap();

            CreateMap<Testimonial, ResultTestimonialDto>().ReverseMap();
            CreateMap<Testimonial, UpdateTestimonialDto>().ReverseMap();
            CreateMap<Testimonial, CreateTestimonialDto>().ReverseMap();
            CreateMap<Testimonial, GetByIdTestimonialDto>().ReverseMap();

            CreateMap<ContactInfo, ResultContactInfoDto>().ReverseMap();
            CreateMap<ContactInfo, UpdateContactInfoDto>().ReverseMap();
            CreateMap<ContactInfo, CreateContactInfoDto>().ReverseMap();
            CreateMap<ContactInfo, GetByIdContactInfoDto>().ReverseMap();

            CreateMap<ContactMessage, ResultContactMessageDto>().ReverseMap();
            CreateMap<ContactMessage, UpdateContactMessageDto>().ReverseMap();
            CreateMap<ContactMessage, CreateContactMessageDto>().ReverseMap();
            CreateMap<ContactMessage, GetByIdContactMessageDto>().ReverseMap();

            CreateMap<Feature, ResultFeatureDto>().ReverseMap();
            CreateMap<Feature, UpdateFeatureDto>().ReverseMap();
            CreateMap<Feature, CreateFeatureDto>().ReverseMap();
            CreateMap<Feature, GetByIdFeatureDto>().ReverseMap();
        }
    }
}
