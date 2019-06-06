using IQDashboard.Core.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IQDashboard.Service.Menu
{
    public partial interface IMenu
    {
        //Log GetMenu(int logId);
        IList<VerticalMaster> GetAllVerticals();
    }
}
