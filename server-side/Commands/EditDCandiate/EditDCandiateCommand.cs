using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Commands
{
    public class EditDCandiateCommand : IRequest<string>
    {
        public int Id { get; set; }
        public DCandiate Candiate { get; set; }

        public EditDCandiateCommand(int id, DCandiate candiate)
        {
            Id = id;
            Candiate = candiate;
        }
    }
    public class EditDCandiateHandler : IRequestHandler<EditDCandiateCommand, string>
    {
        private readonly DonationDbContext _context;

        public EditDCandiateHandler(DonationDbContext context)
        {
            _context = context;
        }
        private bool DCandiateExists(int id)
        {
            return _context.DCandiates.Any(e => e.Id == id);
        }

        public async Task<string> Handle(EditDCandiateCommand request, CancellationToken cancellationToken)
        {
            if (request.Id != request.Candiate.Id)
            {
                return "BadRequest";
            }

            _context.Entry(request.Candiate).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DCandiateExists(request.Id))
                {
                    return "NotFound";
                }
                else
                {
                    throw;
                }
            }

            return "NoContent";

        }
    }
}