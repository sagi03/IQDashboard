using IQDashboard.Core.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IQDashboard.Service.Handbook
{
    public partial interface IHandbookService
    {
        void InsertProjectSummary(ProjectSummary projectsummary);

        void UpdateProjectSummary(ProjectSummary projectsummary);

    }
}
