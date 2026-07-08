using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CosmeticServer.API.Data.Entities;
using CosmeticServer.API.Data.Context;
using CosmeticServer.API.Dtos.ContactInfoDtos;
using AutoMapper;

[Route("api/[controller]")]
[ApiController]
public class ContactInfoesController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly IMapper _mapper;
    public ContactInfoesController(AppDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    // GET: api/ContactInfo
    [HttpGet]
    public async Task<ActionResult<IEnumerable<ResultContactInfoDto>>> GetContactInfo()
    {
        var values = await _context.ContactInfos.ToListAsync();
        return _mapper.Map<List<ResultContactInfoDto>>(values);
    }

    // GET: api/ContactInfo/5
    [HttpGet("{id}")]
    public async Task<ActionResult<GetByIdContactInfoDto>> GetContactInfo(int id)
    {
        var contactinfo = await _context.ContactInfos.FindAsync(id);

        if (contactinfo == null)
        {
            return NotFound();
        }

        return _mapper.Map<GetByIdContactInfoDto>(contactinfo);
    }

    // PUT: api/ContactInfo/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut("{id}")]
    public async Task<IActionResult> PutContactInfo(int? id, UpdateContactInfoDto updateContactInfoDto)
    {
        if (id != updateContactInfoDto.Id)
        {
            return BadRequest();
        }

        var contactinfo = _mapper.Map<ContactInfo>(updateContactInfoDto);

        _context.Entry(contactinfo).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!ContactInfoExists(id))
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

    // POST: api/ContactInfo
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
    public async Task<ActionResult<ResultContactInfoDto>> PostContactInfo(CreateContactInfoDto createContactInfoDto)
    {
        var contactinfo = _mapper.Map<ContactInfo>(createContactInfoDto);
        _context.ContactInfos.Add(contactinfo);
        await _context.SaveChangesAsync();
        var resultContactInfo = _mapper.Map<ResultContactInfoDto>(contactinfo);
        return CreatedAtAction("GetContactInfo", new { id = contactinfo.Id }, resultContactInfo);
    }

    // DELETE: api/ContactInfo/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteContactInfo(int? id)
    {
        var contactinfo = await _context.ContactInfos.FindAsync(id);
        if (contactinfo == null)
        {
            return NotFound();
        }

        _context.ContactInfos.Remove(contactinfo);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool ContactInfoExists(int? id)
    {
        return _context.ContactInfos.Any(e => e.Id == id);
    }
}
