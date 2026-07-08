using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CosmeticServer.API.Data.Entities;
using CosmeticServer.API.Data.Context;
using AutoMapper;
using CosmeticServer.API.Dtos.FeatureDtos;

[Route("api/[controller]")]
[ApiController]
public class FeaturesController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly IMapper _mapper;
    public FeaturesController(AppDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    // GET: api/Feature
    [HttpGet]
    public async Task<ActionResult<IEnumerable<ResultFeatureDto>>> GetFeature()
    {
        var feature = await _context.Features.ToListAsync();
        return _mapper.Map<List<ResultFeatureDto>>(feature);
    }

    // GET: api/Feature/5
    [HttpGet("{id}")]
    public async Task<ActionResult<GetByIdFeatureDto>> GetFeature(int id)
    {
        var feature = await _context.Features.FindAsync(id);

        if (feature == null)
        {
            return NotFound();
        }

        return _mapper.Map<GetByIdFeatureDto>(feature);
    }

    // PUT: api/Feature/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut("{id}")]
    public async Task<IActionResult> PutFeature(int? id, UpdateFeatureDto updateFeatureDto)
    {
        if (id != updateFeatureDto.Id)
        {
            return BadRequest();
        }

        var feature = _mapper.Map<Feature>(updateFeatureDto);

        _context.Entry(feature).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!FeatureExists(id))
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

    // POST: api/Feature
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
    public async Task<ActionResult<ResultFeatureDto>> PostFeature(CreateFeatureDto createFeatureDto)
    {
        var feature = _mapper.Map<Feature>(createFeatureDto);
        _context.Features.Add(feature);
        await _context.SaveChangesAsync();
        var resultfeature = _mapper.Map<ResultFeatureDto>(feature);
        return CreatedAtAction("GetFeature", new { id = feature.Id }, resultfeature);
    }

    // DELETE: api/Feature/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteFeature(int? id)
    {
        var feature = await _context.Features.FindAsync(id);
        if (feature == null)
        {
            return NotFound();
        }

        _context.Features.Remove(feature);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool FeatureExists(int? id)
    {
        return _context.Features.Any(e => e.Id == id);
    }
}
