using IQDashboard.Core.Domain;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace IQDashboard.Data.Mapping
{
    public class NavigationMasterMap
    {
        public NavigationMasterMap(EntityTypeBuilder<NavigationMaster> entityBuilder)
        {
            entityBuilder.HasKey(t => t.Id);
            entityBuilder.Property(t => t.NavigationUrl);
            entityBuilder.Property(t => t.NavName);
            //entityBuilder.Property(t => t.Publisher).IsRequired();
            //entityBuilder.HasOne(e => e.Author).WithMany(e => e.Books).HasForeignKey(e => e.AuthorId);
        }
    }
}
