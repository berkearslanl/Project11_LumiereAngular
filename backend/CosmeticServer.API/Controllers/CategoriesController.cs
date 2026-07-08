using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CosmeticServer.API.Data.Entities;
using CosmeticServer.API.Data.Context;
using CosmeticServer.API.Dtos.CategoryDtos;
using AutoMapper;

[Route("api/[controller]")]
[ApiController]
public class CategoriesController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly IMapper _mapper;
    public CategoriesController(AppDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    // GET: api/Category
    [HttpGet]
    public async Task<ActionResult<IEnumerable<ResultCategoryDto>>> GetCategory()
    {
        var values = await _context.Categories.ToListAsync();
        return _mapper.Map<List<ResultCategoryDto>>(values);
    }

    // GET: api/Category/5
    [HttpGet("{id}")]
    public async Task<ActionResult<GetByIdCategoryDto>> GetCategory(int id)
    {
        var category = await _context.Categories.FindAsync(id);

        if (category == null)
        {
            return NotFound();
        }

        return _mapper.Map<GetByIdCategoryDto>(category);
    }

    // PUT: api/Category/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut("{id}")]
    public async Task<IActionResult> PutCategory(int? id, UpdateCategoryDto updateCategoryDto)
    {
        if (id != updateCategoryDto.Id)
        {
            return BadRequest();
        }

        var category = _mapper.Map<Category>(updateCategoryDto);

        _context.Entry(category).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!CategoryExists(id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }

        return NoContent();
    }

    // POST: api/Category
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
    public async Task<ActionResult<ResultCategoryDto>> PostCategory(CreateCategoryDto createCategoryDto)
    {
        var category = _mapper.Map<Category>(createCategoryDto);

        _context.Categories.Add(category);
        await _context.SaveChangesAsync();

        var resultCategoryDto = _mapper.Map<ResultCategoryDto>(category);

        return CreatedAtAction("GetCategory", new { id = category.Id }, resultCategoryDto);
    }

    // DELETE: api/Category/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteCategory(int? id)
    {
        var category = await _context.Categories.FindAsync(id);
        if (category == null)
        {
            return NotFound();
        }

        _context.Categories.Remove(category);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool CategoryExists(int? id)
    {
        return _context.Categories.Any(e => e.Id == id);
    }
}
