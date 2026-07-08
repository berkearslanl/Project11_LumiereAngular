using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CosmeticServer.API.Data.Entities;
using CosmeticServer.API.Data.Context;
using AutoMapper;
using CosmeticServer.API.Dtos.ContactMessageDtos;

[Route("api/[controller]")]
[ApiController]
public class ContactMessagesController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly IMapper _mapper;
    public ContactMessagesController(AppDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    // GET: api/ContactMessage
    [HttpGet]
    public async Task<ActionResult<IEnumerable<ResultContactMessageDto>>> GetContactMessage()
    {
        var values = await _context.ContactMessages.ToListAsync();
        return _mapper.Map<List<ResultContactMessageDto>>(values);
    }

    // GET: api/ContactMessage/5
    [HttpGet("{id}")]
    public async Task<ActionResult<GetByIdContactMessageDto>> GetContactMessage(int id)
    {
        var contactmessage = await _context.ContactMessages.FindAsync(id);

        if (contactmessage == null)
        {
            return NotFound();
        }

        return _mapper.Map<GetByIdContactMessageDto>(contactmessage);
    }

    // PUT: api/ContactMessage/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut("{id}")]
    public async Task<IActionResult> PutContactMessage(int? id, UpdateContactMessageDto updateContactMessageDto)
    {
        if (id != updateContactMessageDto.Id)
        {
            return BadRequest();
        }

        var contactmessage = _mapper.Map<ContactMessage>(updateContactMessageDto);

        _context.Entry(contactmessage).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!ContactMessageExists(id))
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

    // POST: api/ContactMessage
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
    public async Task<ActionResult<ResultContactMessageDto>> PostContactMessage(CreateContactMessageDto createContactMessageDto)
    {
        var contactmessage = _mapper.Map<ContactMessage>(createContactMessageDto);
        _context.ContactMessages.Add(contactmessage);
        await _context.SaveChangesAsync();
        var resultcontactmessage = _mapper.Map<ResultContactMessageDto>(contactmessage);
        return CreatedAtAction("GetContactMessage", new { id = contactmessage.Id }, resultcontactmessage);
    }

    // DELETE: api/ContactMessage/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteContactMessage(int? id)
    {
        var contactmessage = await _context.ContactMessages.FindAsync(id);
        if (contactmessage == null)
        {
            return NotFound();
        }

        _context.ContactMessages.Remove(contactmessage);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool ContactMessageExists(int? id)
    {
        return _context.ContactMessages.Any(e => e.Id == id);
    }
}
