using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace IQDashboard.Core.Domain
{
                 
    public class NavigationMaster : BaseEntity
    {
        //[Key]
       // public int NavId { get; set; }
        public string NavName { get; set; }
        public string NavigationUrl { get; set; }
        public int? ParentId { get; set; }
        public bool? IsActive { get; set; }
        public int? IndexPos { get; set; }

        public  IEnumerable<VerticalMaster> Verticallst { get; set; }
    }
}