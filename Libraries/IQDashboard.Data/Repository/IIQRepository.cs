using IQDashboard.Data.Entities;
using System.Collections.Generic;

namespace IQDashboard.Data.Repository
{
    public interface IIQP
    {
        UserDetails ValidateUser(string emailid, string password);
        IEnumerable<NavigationMaster> GetMenu();
    }
}