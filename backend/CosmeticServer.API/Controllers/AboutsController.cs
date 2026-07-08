using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CosmeticServer.API.Data.Entities;
using CosmeticServer.API.Data.Context;
using CosmeticServer.API.Dtos.AboutDtos;
using AutoMapper;

[Route("api/[controller]")]
[ApiController]
public class AboutsController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly IMapper _mapper;
    public AboutsController(AppDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    // GET: api/About
    [HttpGet]
    public async Task<ActionResult<IEnumerable<ResultAboutDto>>> GetAbout()
    {
        var values = await _context.Abouts.ToListAsync();
        return _mapper.Map<List<ResultAboutDto>>(values);
    }

    // GET: api/About/5
    [HttpGet("{id}")]
    public async Task<ActionResult<GetByIdAboutDto>> GetAbout(int id)
    {
        var about = await _context.Abouts.FindAsync(id);

        if (about == null)
        {
            return NotFound();
        }

        return _mapper.Map<GetByIdAboutDto>(about);
    }

    // PUT: api/About/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut("{id}")]
    public async Task<IActionResult> PutAbout(int? id, UpdateAboutDto updateAboutDto)
    {
        if (id != updateAboutDto.Id)
        {
            return BadRequest();
        }

        var about = _mapper.Map<About>(updateAboutDto);

        _context.Entry(about).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!AboutExists(id))
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

    // POST: api/About
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
    public async Task<ActionResult<ResultAboutDto>> PostAbout(CreateAboutDto createAboutDto)
    {
        var about = _mapper.Map<About>(createAboutDto);
        _context.Abouts.Add(about);
        await _context.SaveChangesAsync();

        var resultAbout = _mapper.Map<ResultAboutDto>(about);

        return CreatedAtAction("GetAbout", new { id = about.Id }, resultAbout);
    }

    // DELETE: api/About/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteAbout(int? id)
    {
        var about = await _context.Abouts.FindAsync(id);
        if (about == null)
        {
            return NotFound();
        }

        _context.Abouts.Remove(about);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool AboutExists(int? id)
    {
        return _context.Abouts.Any(e => e.Id == id);
    }
}
