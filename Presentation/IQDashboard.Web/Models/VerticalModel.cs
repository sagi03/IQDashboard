using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IQDashboard.Web.Models
{
    public class VerticalModel
    {
        public int VerticalId { get; set; }
        public string Vertical { get; set; }
        public bool IsActive { get; set; }
        public int? NavId { get; set; }
    }
}
