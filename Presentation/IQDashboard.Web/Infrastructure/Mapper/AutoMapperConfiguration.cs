using AutoMapper;
using IQDashboard.Core.Domain;
using IQDashboard.Web.Models;

namespace IQDashboard.Web.Infrastructure.Mapper
{
    public class AutoMapperConfiguration : Profile
    {
        public AutoMapperConfiguration()
        {
            CreateMenuMaps();
        }

        protected virtual void CreateMenuMaps()
        {
            CreateMap<NavigationMaster, TopMenuModel>();
            CreateMap<VerticalMaster, VerticalModel>();
        }
    }
}
