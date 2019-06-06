using IQDashboard.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IQDashboard.Web.ViewModel
{
    public class RiskProfileViewModel
    {
        public IEnumerable<RiskCriteriaMaster> CriterialstPS { get; set; }
        public IEnumerable<RiskCriteriaMaster> CriterialstPC { get; set; }
    }
}
