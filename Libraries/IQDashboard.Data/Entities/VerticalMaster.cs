using System.ComponentModel.DataAnnotations;

namespace IQDashboard.Data.Entities
{
    public class VerticalMaster
    {
        [Key]
        public int VerticalId { get; set; }
        public string Vertical { get; set; }
        public int? NavId { get; set; }
        public bool? IsActive { get; set; }
    }
}