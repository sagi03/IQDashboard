using System.ComponentModel.DataAnnotations;

namespace IQDashboard.Core.Domain
{
    public class VerticalMaster : BaseEntity
    {
        [Key]
        public int VerticalId { get; set; }
        public string Vertical { get; set; }
        public bool? IsActive { get; set; }
        public int? NavId { get; set; }
    }
}