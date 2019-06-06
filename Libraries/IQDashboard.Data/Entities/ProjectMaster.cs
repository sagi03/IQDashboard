using System.ComponentModel.DataAnnotations;

namespace IQDashboard.Data.Entities
{
    public class ProjectMaster
    {
        [Key]
        public int ProjectId { get; set; }
        public string ProjectName { get; set; }
        public int? ProjectManager { get; set; }
        public int? ClientId { get; set; }
        public bool? IsActive { get; set; }
    }
}