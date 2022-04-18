using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using WebApi.Commands;
using WebApi.Models;
using WebApi.Queries;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DCandiatesController : ControllerBase
    {
        private readonly DonationDbContext _context;
        private readonly IMediator _mediator;

        public DCandiatesController(DonationDbContext context, IMediator mediator)
        {
            _context = context;
            _mediator = mediator;
        }

        // GET: api/DCandiates
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DCandiate>>> GetDCandiates()
        {
            var query = new GetAllDCandiateQuery();
            var result = await _mediator.Send(query);
            return result;

        }

        // GET: api/DCandiates/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DCandiate>> GetDCandiate(int id)
        {
            var query = new GetDCandiateByIdQuery(id);
            var result = await _mediator.Send(query);
            return result != null ? result : NotFound();


        }

        // PUT: api/DCandiates/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDCandiate(int id, DCandiate dCandiate)
        {
            var command = new EditDCandiateCommand(id, dCandiate);
            var result = await _mediator.Send(command);
            switch (result)
            {
                case "BadRequest": return BadRequest();
                case "NotFound": return NotFound();
                case "NoContent": return NoContent();
            }

            return StatusCode(200);


        }

        // POST: api/DCandiates
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<DCandiate>> PostDCandiate(DCandiate dCandiate)
        {
            var command = new CreateDCandiateCommand(dCandiate);
            var result = await _mediator.Send(command);


            return CreatedAtAction("GetDCandiate", new { id = result.Id }, result);
        }

        // DELETE: api/DCandiates/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDCandiate(int id)
        {
            var command = new DeleteDCandiateCommand(id);
            var result = await _mediator.Send(command);
            if (result== "NotFound")
            {
                return NotFound();
            }
            else
            {
                return NoContent();

            }

        }


    }
}
