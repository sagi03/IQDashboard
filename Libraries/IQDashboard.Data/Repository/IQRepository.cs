using IQDashboard.Data.Entities;
using System.Collections.Generic;
using System.Linq;

namespace IQDashboard.Data.Repository
{
    public class IQP : IIQP
    {
        #region Fields
        private readonly IQContext _context;
        #endregion
        public IQP(IQContext context)
        {
            _context = context;
        }

        public IEnumerable<NavigationMaster> GetMenu()
        {
            var result = _context.NavigationMaster;
            return result;
        }

        public UserDetails ValidateUser(string emailid, string password)
        {
            var result = _context.UserDetails.Where(c => c.EmailId.ToLower() == emailid.ToLower() && c.Password == password && c.IsActive == true).FirstOrDefault();
            return result;
        }
    }
}