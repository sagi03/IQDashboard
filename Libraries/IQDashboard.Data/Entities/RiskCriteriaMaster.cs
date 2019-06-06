using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace IQDashboard.Data.Entities
{
    public class RiskCriteriaMaster
    {
        [Key]
        public int RiskCriteriaId { get; set; }
        public string Criterias { get; set; }
        public bool? IsProjectSize { get; set; }
        public bool? IsActive { get; set; }
    }
}