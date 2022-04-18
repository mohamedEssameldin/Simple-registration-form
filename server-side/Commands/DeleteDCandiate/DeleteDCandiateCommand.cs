using MediatR;
using System.Threading;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Commands
{
    public class DeleteDCandiateCommand : IRequest<string>
    {
        public int Id { get; set; }

        public DeleteDCandiateCommand(int id)
        {
            Id = id;
        }
    }
    public class DeleteDCandiateHandler : IRequestHandler<DeleteDCandiateCommand, string>
    {
        private readonly DonationDbContext _context;

        public DeleteDCandiateHandler(DonationDbContext context)
        {
            _context = context;
        }
        public async Task<string> Handle(DeleteDCandiateCommand request, CancellationToken cancellationToken)
        {
            var dCandiate = await _context.DCandiates.FindAsync(request.Id);
            if (dCandiate == null)
            {
                return "NotFound";
            }

            _context.DCandiates.Remove(dCandiate);
            await _context.SaveChangesAsync();

            return "NoContent";
        }
    }
}