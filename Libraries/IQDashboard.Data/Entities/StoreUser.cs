using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IQDashboard.Data.Entities
{
    public class StoreUser : IdentityUser
    {
        public string Name { get; set; }
        public string EmailId { get; set; }
    }
}