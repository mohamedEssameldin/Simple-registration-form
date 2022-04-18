using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Threading;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Queries
{
    public class GetDCandiateByIdQuery : IRequest<ActionResult<DCandiate>>
    {
        public int Id { get; set; }

        public GetDCandiateByIdQuery(int id)
        {
            Id = id;
        }

    }
    public class GetDCandiateByIdHandler : IRequestHandler<GetDCandiateByIdQuery, ActionResult<DCandiate>>
    {
        private readonly DonationDbContext _context;

        public GetDCandiateByIdHandler(DonationDbContext context)
        {
            _context = context;
        }

        public async Task<ActionResult<DCandiate>> Handle(GetDCandiateByIdQuery request, CancellationToken cancellationToken)
        {
            var dCandiate = await _context.DCandiates.FindAsync(request.Id);

            if (dCandiate == null)
            {
                return null;
            }

            return dCandiate;
        }
    }
}