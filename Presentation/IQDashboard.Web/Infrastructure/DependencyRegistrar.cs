using Autofac;
using IQDashboard.Core.Data;
using IQDashboard.Data;
using IQDashboard.Data.Repository;
using IQDashboard.Service.Handbook;
using IQDashboard.Service.Menu;
using IQDashboard.Web.Factories;
using Microsoft.EntityFrameworkCore;
using System;

namespace IQDashboard.Web.Infrastructure
{
    public class DependencyRegistrar : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            //builder.RegisterType<EfDataProviderManager>().As<IDataProviderManager>().InstancePerDependency();
            builder.Register(context => context.Resolve<IDataProviderManager>().DataProvider).As<IDataProvider>().InstancePerDependency();

            //builder.Register(context => new NopObjectContext(context.Resolve<DbContextOptions<NopObjectContext>>()))
            //   .As<IDbContext>().InstancePerLifetimeScope();


            builder.RegisterGeneric(typeof(EfRepository<>)).As(typeof(IRepository<>)).InstancePerLifetimeScope();
            
               
            builder.RegisterType<NopObjectContext>().As<IDbContext>();
            builder.RegisterType<HandbookService>().As<IHandbookService>().InstancePerLifetimeScope();
            builder.RegisterType<Menu>().As<IMenu>().InstancePerLifetimeScope();
            builder.RegisterType<IQModelFactory>().As<IIQModelFactory>();
            builder.RegisterType<IQP>().As<IIQP>();
        }
    }
}
