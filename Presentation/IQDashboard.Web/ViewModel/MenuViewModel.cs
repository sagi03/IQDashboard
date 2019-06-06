using System;

namespace IQDashboard.Web.ViewModel
{
    public class MenuViewModel
    {
        public int NavId { get; set; }
        public string NavName { get; set; }
        public string NavigationUrl { get; set; }
        public int? ParentId { get; set; }
        public bool? IsActive { get; set; }
    }
}
