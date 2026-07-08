using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CosmeticServer.API.Data.Entities;
using CosmeticServer.API.Data.Context;
using CosmeticServer.API.Dtos.TestimonialDtos;
using AutoMapper;

[Route("api/[controller]")]
[ApiController]
public class TestimonialsController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly IMapper _mapper;
    public TestimonialsController(AppDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    // GET: api/Testimonial
    [HttpGet]
    public async Task<ActionResult<IEnumerable<ResultTestimonialDto>>> GetTestimonial()
    {
        var testimonial = await _context.Testimonials.ToListAsync();
        return _mapper.Map<List<ResultTestimonialDto>>(testimonial);
    }

    // GET: api/Testimonial/5
    [HttpGet("{id}")]
    public async Task<ActionResult<GetByIdTestimonialDto>> GetTestimonial(int id)
    {
        var testimonial = await _context.Testimonials.FindAsync(id);

        if (testimonial == null)
        {
            return NotFound();
        }

        return _mapper.Map<GetByIdTestimonialDto>(testimonial);
    }

    // PUT: api/Testimonial/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut("{id}")]
    public async Task<IActionResult> PutTestimonial(int? id, UpdateTestimonialDto updateTestimonialDto)
    {
        if (id != updateTestimonialDto.Id)
        {
            return BadRequest();
        }

        var testimonial = _mapper.Map<Testimonial>(updateTestimonialDto);

        _context.Entry(testimonial).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!TestimonialExists(id))
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

    // POST: api/Testimonial
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
    public async Task<ActionResult<ResultTestimonialDto>> PostTestimonial(CreateTestimonialDto createTestimonialDto)
    {
        var testimonial = _mapper.Map<Testimonial>(createTestimonialDto);
        _context.Testimonials.Add(testimonial);
        await _context.SaveChangesAsync();
        var resultTestimonial = _mapper.Map<ResultTestimonialDto>(testimonial);
        return CreatedAtAction("GetTestimonial", new { id = testimonial.Id }, resultTestimonial);
    }

    // DELETE: api/Testimonial/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteTestimonial(int? id)
    {
        var testimonial = await _context.Testimonials.FindAsync(id);
        if (testimonial == null)
        {
            return NotFound();
        }

        _context.Testimonials.Remove(testimonial);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool TestimonialExists(int? id)
    {
        return _context.Testimonials.Any(e => e.Id == id);
    }
}
