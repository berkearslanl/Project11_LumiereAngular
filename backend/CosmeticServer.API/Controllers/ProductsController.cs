using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CosmeticServer.API.Data.Entities;
using CosmeticServer.API.Data.Context;
using CosmeticServer.API.Dtos.ProductDtos;
using CosmeticServer.API.Dtos.CategoryDtos;
using AutoMapper;

[Route("api/[controller]")]
[ApiController]
public class ProductsController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly IMapper _mapper;
    public ProductsController(AppDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    // GET: api/Product
    [HttpGet]
    public async Task<ActionResult<IEnumerable<ResultProductDto>>> GetProduct()
    {
        var values = await _context.Products.ToListAsync();
        return _mapper.Map<List<ResultProductDto>>(values);
    }
    [HttpGet("GetProductLast4")]
    public async Task<ActionResult<IEnumerable<ResultProductDto>>> GetProductLast4()
    {
        var values = await _context.Products
            .OrderByDescending(x => x.Id)
            .Take(4)
            .ToListAsync();
        return _mapper.Map<List<ResultProductDto>>(values);
    }

    // GET: api/Product/5
    [HttpGet("{id}")]
    public async Task<ActionResult<GetByIdProductDto>> GetProduct(int id)
    {
        var product = await _context.Products.FindAsync(id);

        if (product == null)
        {
            return NotFound();
        }

        return _mapper.Map<GetByIdProductDto>(product);
    }

    // PUT: api/Product/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut("{id}")]
    public async Task<IActionResult> PutProduct(int? id, UpdateProductDto updateProductDto)
    {
        if (id != updateProductDto.Id)
        {
            return BadRequest();
        }

        var product = _mapper.Map<Product>(updateProductDto);

        _context.Entry(product).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!ProductExists(id))
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

    // POST: api/Product
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
    public async Task<ActionResult<ResultProductDto>> PostProduct(CreateProductDto createProductDto)
    {
        var product = _mapper.Map<Product>(createProductDto);
        _context.Products.Add(product);
        await _context.SaveChangesAsync();
        var resultProduct = _mapper.Map<ResultProductDto>(product);
        return CreatedAtAction("GetProduct", new { id = product.Id }, resultProduct);
    }

    // DELETE: api/Product/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteProduct(int? id)
    {
        var product = await _context.Products.FindAsync(id);
        if (product == null)
        {
            return NotFound();
        }

        _context.Products.Remove(product);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool ProductExists(int? id)
    {
        return _context.Products.Any(e => e.Id == id);
    }
}
