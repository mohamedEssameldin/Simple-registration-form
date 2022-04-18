using MediatR;
using System.Threading;
using System.Threading.Tasks;
using WebApi.Commands.CreateDCandiate;
using WebApi.Models;

namespace WebApi.Commands
{
    public class CreateDCandiateCommand : IRequest<DCandiate>
    {
        public DCandiate Candiate;

        public CreateDCandiateCommand(DCandiate candiate)
        {
            Candiate = candiate;
        }
    }

    public class CreateDCandiateHandler : IRequestHandler<CreateDCandiateCommand, DCandiate>
    {
        private readonly DonationDbContext _context;

        public CreateDCandiateHandler(DonationDbContext context)
        {
            _context = context;
        }

        public async Task<DCandiate> Handle(CreateDCandiateCommand request, CancellationToken cancellationToken)
        {
            var validator = new CreateDCandiateCommandValidator();
            validator.Validate(request);
            _context.DCandiates.Add(request.Candiate);
            await _context.SaveChangesAsync();
            return request.Candiate;
        }
    }
}