using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace IQDashboard.Data.Entities
{
    public class ProjectSummary
    {
        [Key]
        public int ProjectSummaryId { get; set; }
        public int ProjectId { get; set; }
        public string ClientName { get; set; }
        public string ProjectName { get; set; }
        public string Function { get; set; }
        public string BUHead { get; set; }
        public string DeliveryHead { get; set; }
        public string AccountManager { get; set; }
        public string ProjectManager { get; set; }
        public string CurrentSOW { get; set; }
        public DateTime ProjectStartDate { get; set; }
        public DateTime ProjectEndDate { get; set; }
        public DateTime ActualStartDate { get; set; }
        public DateTime ForecastedEndDate { get; set; }
        public string ProjectType { get; set; }
        public string PricingCode { get; set; }
        public string BillingType { get; set; }

        public string Summary { get; set; }
        public string PSC { get; set; }
        public string Assumptions { get; set; }
        public string Constraints { get; set; }
    }
}