using IQDashboard.Core.Domain;
using IQDashboard.Service.Handbook;
using IQDashboard.Web.Factories;
using IQDashboard.Web.ViewModel;
using Microsoft.AspNetCore.Mvc;

namespace IQDashboard.Web.Controllers
{
    public class ProjecthandbookController : Controller
    {
       // private readonly IIQModelFactory _projectModelFactory;

        private readonly IHandbookService _handbookService;

        public ProjecthandbookController(IHandbookService handbookService)
        {
            //this._projectModelFactory = projectModelFactory;
            this._handbookService=handbookService;
        }

        public IActionResult ProjectHandbook()
        {
            return View();
        }

        public IActionResult Handbook(string next)
        {
            return PartialView();
        }

        [HttpPost]
        public IActionResult Handbook(ProjectSummaryViewModel model)
        {
            if (ModelState.IsValid)
            {
                ProjectSummary summary = new ProjectSummary
                {
                    ClientName = model.ClientName,
                    ProjectName = model.ProjectName,
                    ProjectStartDate = model.ProjectStartDate,
                    ProjectEndDate = model.ProjectEndDate,
                    ActualStartDate = model.ActualStartDate,
                    ForecastedEndDate = model.ForecastedEndDate,
                    ProjectId = 1
                };

                _handbookService.InsertProjectSummary(summary);
            }
            else
            {
                ModelState.AddModelError("", "Failed To Save");
            }
            return RedirectToAction("Handbook");
        }

        public IActionResult Risk()
        {
            return PartialView();
        }
    }
}