﻿using Microsoft.EntityFrameworkCore;

namespace WebApi.Models
{
    public class DonationDbContext : DbContext
    {
        public DonationDbContext(DbContextOptions<DonationDbContext> options) : base(options)
        {

        }
        public DbSet<DCandiate> DCandiates { get; set; }

    }
}