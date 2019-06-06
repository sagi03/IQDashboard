using System;
using System.ComponentModel.DataAnnotations;

namespace IQDashboard.Web.ViewModel
{
    public class ProjectSummaryViewModel
    {
        [Required(ErrorMessage = "Please enter client name.")]
        [MaxLength(50, ErrorMessage = "You have reached your maximum limit of characters allowed.")]
        public string ClientName { get; set; }
        [MaxLength(50, ErrorMessage = "You have reached your maximum limit of characters allowed.")]
        public string ProjectName { get; set; }
        [MaxLength(50, ErrorMessage = "You have reached your maximum limit of characters allowed.")]
        public string Function { get; set; }
        [MaxLength(50, ErrorMessage = "You have reached your maximum limit of characters allowed.")]
        public string BUHead { get; set; }
        [MaxLength(50, ErrorMessage = "You have reached your maximum limit of characters allowed.")]
        public string DeliveryHead { get; set; }
        [MaxLength(50, ErrorMessage = "You have reached your maximum limit of characters allowed.")]
        public string AccountManager { get; set; }
        [MaxLength(50, ErrorMessage = "You have reached your maximum limit of characters allowed.")]
        public string ProjectManager { get; set; }
        [MaxLength(50, ErrorMessage = "You have reached your maximum limit of characters allowed.")]
        public string CurrentSOW { get; set; }
        public DateTime ProjectStartDate { get; set; }
        public DateTime ProjectEndDate { get; set; }
        public DateTime ActualStartDate { get; set; }
        public DateTime ForecastedEndDate { get; set; }
        [MaxLength(50, ErrorMessage = "You have reached your maximum limit of characters allowed.")]
        public string ProjectType { get; set; }
        [MaxLength(50, ErrorMessage = "You have reached your maximum limit of characters allowed.")]
        public string PricingCode { get; set; }
        [MaxLength(50, ErrorMessage = "You have reached your maximum limit of characters allowed.")]
        public string BillingType { get; set; }

        [MaxLength(500, ErrorMessage = "You have reached your maximum limit of characters allowed.")]
        public string ProjectSummary { get; set; }
        [MaxLength(500, ErrorMessage = "You have reached your maximum limit of characters allowed.")]
        public string PSC { get; set; }
        [MaxLength(500, ErrorMessage = "You have reached your maximum limit of characters allowed.")]
        public string Assumptions { get; set; }
        [MaxLength(500, ErrorMessage = "You have reached your maximum limit of characters allowed.")]
        public string Constraints { get; set; }
        
    }
}
