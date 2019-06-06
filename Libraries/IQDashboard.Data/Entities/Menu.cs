using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace IQDashboard.Data.Entities
{
    public class NavigationMaster
    {
        [Key]
        public int NavId { get; set; }
        public string NavName { get; set; }
        public string NavigationUrl { get; set; }
        public int? ParentId { get; set; }
        public bool? IsActive { get; set; }
        public List<VerticalMaster> verticallst { get; set; }
    }
}