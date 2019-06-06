using System.ComponentModel.DataAnnotations;

namespace IQDashboard.Web.ViewModel
{
    public class LoginViewModel
    {
        [Required(ErrorMessage = "Please enter username.")]
        [EmailAddress]
        [MaxLength(50, ErrorMessage = "You have reached your maximum limit of characters allowed.")]
        public string UserName { get; set; }
        [Required(ErrorMessage = "Please enter password.")]
        [MaxLength(10, ErrorMessage = "You have reached your maximum limit of characters allowed.")]
        public string Password { get; set; }
    }
}
