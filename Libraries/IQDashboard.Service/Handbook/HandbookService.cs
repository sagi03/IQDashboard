using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using IQDashboard.Core.Data;
using IQDashboard.Core.Domain;
using IQDashboard.Data;

namespace IQDashboard.Service.Handbook
{
    public partial class HandbookService : IHandbookService
    {
        //private readonly IRepository<ProjectSummary> _projectsummaryRepository;
        #region Fields
        private readonly IQContext _context;
        #endregion
        public HandbookService(IQContext context)
        {
            _context = context;
        }

        //public HandbookService(IRepository<ProjectSummary> projectsummaryRepository)
        //{
        //    this._projectsummaryRepository = projectsummaryRepository;
        //}

        public void InsertProjectSummary(ProjectSummary projectsummary)
        {
           // _context.ProjectSummary.Add(projectsummary);
        }

        public void UpdateProjectSummary(ProjectSummary projectsummary)
        {
            throw new NotImplementedException();
        }
    }
}