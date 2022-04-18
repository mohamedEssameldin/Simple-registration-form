using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Queries
{
    public class GetAllDCandiateQuery : IRequest<ActionResult<IEnumerable<DCandiate>>>
    {
    }

    public class GetAllDCandiateHandler : IRequestHandler<GetAllDCandiateQuery, ActionResult<IEnumerable<DCandiate>>>
    {
        private readonly DonationDbContext _context;

        public GetAllDCandiateHandler(DonationDbContext context)
        {
            _context = context;
        }

        public async Task<ActionResult<IEnumerable<DCandiate>>> Handle(GetAllDCandiateQuery request, CancellationToken cancellationToken)
        {
            return await _context.DCandiates.ToListAsync();
        }
    }
}