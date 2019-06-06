using System.ComponentModel.DataAnnotations;

namespace IQDashboard.Data.Entities
{
    public class ClientMaster
    {
        [Key]
        public int ClientId { get; set; }
        public string ClientName { get; set; }
        public int? ClientOwner { get; set; }
        public int? VerticalId { get; set; }
        public bool? IsActive { get; set; }
    }
}