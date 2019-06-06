using IQDashboard.Data.Entities;
using IQDashboard.Web.Models;
using System.Collections.Generic;

namespace IQDashboard.Web.Factories
{
    public partial interface IIQModelFactory
    {
        TopMenuModel PrepareTopMenuModel();
    }
}
