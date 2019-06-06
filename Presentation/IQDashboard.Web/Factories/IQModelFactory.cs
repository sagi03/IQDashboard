using IQDashboard.Service.Menu;
using IQDashboard.Web.Models;
using System.Collections.Generic;

namespace IQDashboard.Web.Factories
{
    public partial class IQModelFactory : IIQModelFactory
    {
        private readonly IMenu _menu;
        public IQModelFactory(IMenu menu)
        {
            this._menu = menu;
        }
        public virtual TopMenuModel PrepareTopMenuModel()
        {
            var model = new TopMenuModel
            {
                verticals = VerticalModels()
            };
            return model;
        }

        public virtual List<VerticalModel> VerticalModels()
        {
            var result = new List<VerticalModel>();
            var allverticals = _menu.GetAllVerticals();
            foreach (var category in allverticals)
            {
                var verticla = new VerticalModel
                {
                    VerticalId = category.VerticalId,
                    Vertical = category.Vertical,
                    NavId = category.NavId
                };
                result.Add(verticla);
            }
            return result;
        }
    }
}