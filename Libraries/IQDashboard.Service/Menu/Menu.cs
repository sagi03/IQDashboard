using IQDashboard.Core.Data;
using IQDashboard.Core.Domain;
using IQDashboard.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IQDashboard.Service.Menu
{
    public class Menu : IMenu
    {
        private readonly IRepository<NavigationMaster> _caterepository;
       //private readonly IDbContext _dbContext;
        public Menu(IRepository<NavigationMaster> categoryRepository)//IDbContext dbContext, 
        {
          
            this._caterepository = categoryRepository;
        }
        public virtual IList<VerticalMaster> GetAllVerticals()
        {
            var result = _caterepository.GetById(1);
            //var result = _categoryRepository.VerticalMaster.ToList();
            //var result = _dbContext.Set<VerticalMaster>().ToList();
            return null;
        }
    }
}