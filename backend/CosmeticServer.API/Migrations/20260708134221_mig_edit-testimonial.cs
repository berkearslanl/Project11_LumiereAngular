using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CosmeticServer.API.Migrations
{
    /// <inheritdoc />
    public partial class mig_edittestimonial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageUrl",
                table: "Testimonials");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImageUrl",
                table: "Testimonials",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }
    }
}
