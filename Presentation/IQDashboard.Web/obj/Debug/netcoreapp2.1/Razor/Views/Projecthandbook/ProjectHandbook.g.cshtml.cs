#pragma checksum "C:\Users\Sanjay.Kumar2\Downloads\New folder\New folder\IQDashboard_New\Presentation\IQDashboard.Web\Views\Projecthandbook\ProjectHandbook.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "246c6a9b3e6b4d9d8e3f9ee12827558c1e9cb1d5"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Projecthandbook_ProjectHandbook), @"mvc.1.0.view", @"/Views/Projecthandbook/ProjectHandbook.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Projecthandbook/ProjectHandbook.cshtml", typeof(AspNetCore.Views_Projecthandbook_ProjectHandbook))]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#line 1 "C:\Users\Sanjay.Kumar2\Downloads\New folder\New folder\IQDashboard_New\Presentation\IQDashboard.Web\Views\_ViewImports.cshtml"
using IQDashboard.Web;

#line default
#line hidden
#line 2 "C:\Users\Sanjay.Kumar2\Downloads\New folder\New folder\IQDashboard_New\Presentation\IQDashboard.Web\Views\_ViewImports.cshtml"
using IQDashboard.Web.Models;

#line default
#line hidden
#line 3 "C:\Users\Sanjay.Kumar2\Downloads\New folder\New folder\IQDashboard_New\Presentation\IQDashboard.Web\Views\_ViewImports.cshtml"
using IQDashboard.Web.ViewModel;

#line default
#line hidden
#line 4 "C:\Users\Sanjay.Kumar2\Downloads\New folder\New folder\IQDashboard_New\Presentation\IQDashboard.Web\Views\_ViewImports.cshtml"
using IQDashboard.Data.Entities;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"246c6a9b3e6b4d9d8e3f9ee12827558c1e9cb1d5", @"/Views/Projecthandbook/ProjectHandbook.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"774a4dff547200e481b3ecd36d9ffc9be8c2afd3", @"/Views/_ViewImports.cshtml")]
    public class Views_Projecthandbook_ProjectHandbook : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(0, 2, true);
            WriteLiteral("\r\n");
            EndContext();
#line 2 "C:\Users\Sanjay.Kumar2\Downloads\New folder\New folder\IQDashboard_New\Presentation\IQDashboard.Web\Views\Projecthandbook\ProjectHandbook.cshtml"
  
    ViewData["Title"] = "ProjectHandbook";

#line default
#line hidden
            BeginContext(53, 5273, true);
            WriteLiteral(@"<div id=""page-wrapper"">
    <div class=""row"">
        <div class=""col-lg-12"">
            <h1 class=""page-header"">Project Handbook</h1>
        </div>
    </div>
    <div class=""row"">
        <div class=""col-md-12"">
            <div class=""panel panel-default"">
                <div class=""panel-heading"">
                    HandBook
                </div>
                <div class=""panel-body"">
                    <!-- Nav tabs -->
                    <ul class=""nav nav-tabs"" style=""font-size:10px !important"" id=""myTab"">
                        <li class=""active"">
                            <a href=""#tabs-1"" onclick=""getContentTab(1,'Handbook')"" data-toggle=""tab"">Project Summary</a>
                        </li>
                        <li>
                            <a href=""#tabs-2"" onclick=""getContentTab(2,'Risk')"" data-toggle=""tab"">Risk</a>
                        </li>
                        <li>
                            <a href=""#tabs-3"" onclick=""getContentTab(3,'ongoingproj");
            WriteLiteral(@"ectrisk')"" data-toggle=""tab"">Ongoing Project Risks</a>
                        </li>
                        <li>
                            <a href=""#tabs-4"" onclick=""getContentTab(4,'dm')"" data-toggle=""tab"">Delivery Methodology</a>
                        </li>
                        <li>
                            <a href=""#tabs-5"" onclick=""getContentTab(5,'md')"" data-toggle=""tab"">Milestones and Deliverables</a>
                        </li>
                        <li>
                            <a href=""#tabs-6"" onclick=""getContentTab(6,'ts')"" data-toggle=""tab"">Team Structure</a>
                        </li>
                        <li>
                            <a href=""#tabs-7"" onclick=""getContentTab(7,'Governance')"" data-toggle=""tab"">Governance</a>
                        </li>
                        <li>
                            <a href=""#tabs-8"" onclick=""getContentTab(8,'km')"" data-toggle=""tab"">KPIs and Metrics</a>
                        </li>
                    </ul>
");
            WriteLiteral(@"                    <div class=""tab-content"" id=""myTabContent"">
                        <div class=""tab-pane fade active in"" id=""tabs-1"">

                        </div>
                        <div class=""tab-pane fade"" id=""tabs-2"">
                        </div>
                        <div class=""tab-pane fade"" id=""tabs-3"">
                        </div>
                        <div class=""tab-pane fade"" id=""tabs-4"">
                        </div>
                        <div class=""tab-pane fade"" id=""tabs-5"">
                        </div>
                        <div class=""tab-pane fade"" id=""tabs-6"">
                        </div>
                        <div class=""tab-pane fade"" id=""tabs-7"">
                        </div>
                        <div class=""tab-pane fade"" id=""tabs-8"">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script type=""text/javascript"">
    $(document).ready(function");
            WriteLiteral(@" () {
        getContentTab(1, 'Handbook');

    });
    function getContentTab(index, action) {
        var targetDiv = ""#tabs-"" + index;
        //var nexttargetDiv = ""#tabs-"" + (index + 1);
        $.ajax({
            type: ""GET"",
            url: ""/Projecthandbook/"" + action,
            contentType: ""application/json; charset=utf-8"",
            dataType: ""html"",
            success: function (data) {
                $(targetDiv).html('');
                $(targetDiv).html(data);
                $("".datepicker"").datepicker();
                var form = $('#summaryform')
                    .removeData(""validator"")
                    .removeData(""unobtrusiveValidation"");

                $.validator.unobtrusive.parse(form);
                //nextprevious();
            },
            error: function () {
                alert(""Error occured!!"")
            }
        });
    }

    function nextprevious() {
        $('.btnNext').click(function () {
            if (ViewData.");
            WriteLiteral(@"ModelState.IsValid) {
                $('.nav-tabs > .active').next('li').find('a').trigger('click');
            }
            else { alert('false'); }
        });

        $('.btnPrevious').click(function () {
            $('.nav-tabs > .active').prev('li').find('a').trigger('click');
        });
    }

    $(document).ready(() => {
        let url = location.href.replace(/\/$/, """");

        if (location.hash) {
            const hash = url.split(""#"");
            $('#myTab a[href=""#' + hash[1] + '""]').tab(""show"");
            url = location.href.replace(/\/#/, ""#"");
            history.replaceState(null, null, url);
            setTimeout(() => {
                $(window).scrollTop(0);
            }, 400);
        }

        $('a[data-toggle=""tab""]').on(""click"", function () {
            let newUrl;
            const hash = $(this).attr(""href"");
            if (hash == ""#tabs-1"") {
                newUrl = url.split(""#"")[0];
            } else {
                newUrl = url.s");
            WriteLiteral("plit(\"#\")[0] + hash;\r\n            }\r\n            newUrl += \"/\";\r\n            history.replaceState(null, null, newUrl);\r\n        });\r\n    });\r\n\r\n</script>");
            EndContext();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
