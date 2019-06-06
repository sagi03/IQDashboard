using IQDashboard.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace IQDashboard.Data
{
    public class IQContext : DbContext
    {
        public IQContext(DbContextOptions<IQContext> options)
           : base(options)
        {
        }

        public virtual DbSet<UserDetails> UserDetails { get; set; }
        public virtual DbSet<NavigationMaster> NavigationMaster { get; set; }
        public virtual DbSet<VerticalMaster> VerticalMaster { get; set; }
        public virtual DbSet<ProjectSummary> ProjectSummary { get; set; }
        public virtual DbSet<RiskCriteriaMaster> RiskCriteriaMaster { get; set; }
        public virtual DbSet<RiskCriteriaMapping> RiskCriteriaMapping { get; set; }
    }
}