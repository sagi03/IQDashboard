using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace IQDashboard.Data.Entities
{
    public class RiskCriteriaMapping
    {
        [Key]
        public int RiskCriteriaMappingId { get; set; }
        public int? RiskCriteriaId { get; set; }
        public string Description { get; set; }
        public int? Risk { get; set; }
        public int? Score { get; set; }
        public bool? IsActive { get; set; }
    }
}