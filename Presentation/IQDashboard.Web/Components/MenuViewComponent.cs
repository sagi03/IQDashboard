using IQDashboard.Web.Factories;
using Microsoft.AspNetCore.Mvc;

namespace IQDashboard.Web.Components
{
    public class MenuViewComponent : ViewComponent
    {
        private readonly IIQModelFactory _projectModelFactory;

        public MenuViewComponent(IIQModelFactory projectModelFactory)
        {
            this._projectModelFactory = projectModelFactory;
        }

        public IViewComponentResult Invoke(int? productThumbPictureSize)
        {
            var model = _projectModelFactory.PrepareTopMenuModel();
            return View(model);
        }
    }
}
