(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app/CustomerSenese/customersense.component.html":
/*!*********************************************************!*\
  !*** ./app/CustomerSenese/customersense.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table id=\"tblCustomers\" class=\"table table-striped\" style=\"overflow:auto;\">\r\n    <tr>\r\n        <th>Account</th>\r\n        <th>Project</th>\r\n        <th>Client Email</th>\r\n        <th>Response</th>\r\n        <th>Feedback Date</th>\r\n        <th>Comment</th>\r\n    </tr>\r\n    <tr *ngFor=\"let item of customersensedata\">\r\n        <td>{{item.accountName}}</td>\r\n        <td>{{item.projectName}}</td>\r\n        <td>{{item.emailAddress}}</td>\r\n        <td>{{item.resoponse}}</td>\r\n        <td>{{item.feedbackDate}}</td>\r\n        <td><div innerHTML=\"{{item.emailBody}}\"></div></td>\r\n    </tr>\r\n</table>"

/***/ }),

/***/ "./app/CustomerSenese/customersense.component.ts":
/*!*******************************************************!*\
  !*** ./app/CustomerSenese/customersense.component.ts ***!
  \*******************************************************/
/*! exports provided: customersense */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customersense", function() { return customersense; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_customersense__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/customersense */ "./app/Services/customersense.ts");



var customersense = /** @class */ (function () {
    function customersense(data) {
        this.data = data;
        this.customersensedata = [];
    }
    customersense.prototype.ngOnInit = function () {
        var _this = this;
        this.data.loadCustomerSenseDetail("ce", "May 2019", "Green").subscribe(function (success) {
            if (success) {
                _this.customersensedata = _this.data.customersensedetails;
            }
        });
    };
    customersense = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "customersense",
            template: __webpack_require__(/*! ./customersense.component.html */ "./app/CustomerSenese/customersense.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_customersense__WEBPACK_IMPORTED_MODULE_2__["customersenseService"]])
    ], customersense);
    return customersense;
}());



/***/ }),

/***/ "./app/Dashboard/dashboard.component.html":
/*!************************************************!*\
  !*** ./app/Dashboard/dashboard.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-title\">\r\n    <div>\r\n        <h1>{{title}}</h1>\r\n    </div>\r\n    <ul class=\"app-breadcrumb breadcrumb\">\r\n        <li class=\"breadcrumb-item\"><i class=\"fa fa-home fa-lg\"></i></li>\r\n        <li class=\"breadcrumb-item\"><a href=\"#\">{{title}}</a></li>\r\n    </ul>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <div class=\"tile\">\r\n            <div class=\"tile-title-w-btn\">\r\n                <h3 class=\"tile-title\">Financial Services</h3>\r\n            </div>\r\n            <div class=\"tile-body\">\r\n                <div id=\"fs\" class=\"embed-responsive-item\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"tile\">\r\n            <div class=\"tile-title-w-btn\">\r\n                <h3 class=\"tile-title\">Communication Engineering</h3>\r\n            </div>\r\n            <div class=\"tile-body\">\r\n                <div id=\"ce\" class=\"embed-responsive-item\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"tile\">\r\n            <div class=\"tile-title-w-btn\">\r\n                <h3 class=\"tile-title\">Life Science</h3>\r\n            </div>\r\n            <div class=\"tile-body\">\r\n                <div id=\"ls\" class=\"embed-responsive-item\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"tile\">\r\n            <div class=\"tile-title-w-btn\">\r\n                <h3 class=\"tile-title\">Business Operations</h3>\r\n            </div>\r\n            <div class=\"tile-body\">\r\n                <div id=\"bo\" class=\"embed-responsive-item\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./app/Dashboard/dashboard.component.ts":
/*!**********************************************!*\
  !*** ./app/Dashboard/dashboard.component.ts ***!
  \**********************************************/
/*! exports provided: Dashboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard", function() { return Dashboard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_dashboardService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/dashboardService */ "./app/Services/dashboardService.ts");
/* harmony import */ var _Services_google_column_chart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/google-column-chart.service */ "./app/Services/google-column-chart.service.ts");




var Dashboard = /** @class */ (function () {
    function Dashboard(data, _columnChartService) {
        this.data = data;
        this._columnChartService = _columnChartService;
        this.title = 'Dashboard';
        this.dashboard = [];
    }
    Dashboard.prototype.ngOnInit = function () {
        var _this = this;
        var vertical = "fs";
        this.data.loadCustomerSense(vertical).subscribe(function (success) {
            if (success) {
                _this.dashboard = _this.data.dashboard;
                _this._columnChartService.BuildColumnChart("fs", _this.data.dashboard);
            }
        });
        this.data.loadCustomerSense("ce").subscribe(function (success) {
            if (success) {
                _this.dashboard = _this.data.dashboard;
                _this._columnChartService.BuildColumnChart("ce", _this.data.dashboard);
            }
        });
        this.data.loadCustomerSense("ls").subscribe(function (success) {
            if (success) {
                _this.dashboard = _this.data.dashboard;
                _this._columnChartService.BuildColumnChart("ls", _this.data.dashboard);
            }
        });
        this.data.loadCustomerSense("bo").subscribe(function (success) {
            if (success) {
                _this.dashboard = _this.data.dashboard;
                _this._columnChartService.BuildColumnChart("bo", _this.data.dashboard);
            }
        });
    };
    Dashboard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "dashboard",
            template: __webpack_require__(/*! ./dashboard.component.html */ "./app/Dashboard/dashboard.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_dashboardService__WEBPACK_IMPORTED_MODULE_2__["dashboardService"], _Services_google_column_chart_service__WEBPACK_IMPORTED_MODULE_3__["GoogleColumnChartService"]])
    ], Dashboard);
    return Dashboard;
}());



/***/ }),

/***/ "./app/Services/customersense.ts":
/*!***************************************!*\
  !*** ./app/Services/customersense.ts ***!
  \***************************************/
/*! exports provided: customersenseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customersenseService", function() { return customersenseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");




var customersenseService = /** @class */ (function () {
    function customersenseService(http) {
        this.http = http;
        this.customersensedetails = [];
    }
    customersenseService.prototype.loadCustomerSenseDetail = function (vertical, month, color) {
        var _this = this;
        return this.http.get("http://10.11.200.40:2121/api/Feedbackdetail?vertical=" + vertical + "&week=" + month + "&color=" + color)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            _this.customersensedetails = data;
            return true;
        }));
    };
    customersenseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], customersenseService);
    return customersenseService;
}());



/***/ }),

/***/ "./app/Services/dashboardService.ts":
/*!******************************************!*\
  !*** ./app/Services/dashboardService.ts ***!
  \******************************************/
/*! exports provided: dashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dashboardService", function() { return dashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");




var dashboardService = /** @class */ (function () {
    function dashboardService(http) {
        this.http = http;
        this.dashboard = [];
    }
    dashboardService.prototype.loadCustomerSense = function (vertical) {
        var _this = this;
        return this.http.get("http://10.11.200.40:2121/api/feedbackresponse?vertical=" + vertical + "&" + "flag=" + false)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            _this.dashboard = data;
            return true;
        }));
    };
    dashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], dashboardService);
    return dashboardService;
}());



/***/ }),

/***/ "./app/Services/google-charts.base.service.ts":
/*!****************************************************!*\
  !*** ./app/Services/google-charts.base.service.ts ***!
  \****************************************************/
/*! exports provided: GoogleChartsBaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChartsBaseService", function() { return GoogleChartsBaseService; });
var GoogleChartsBaseService = /** @class */ (function () {
    function GoogleChartsBaseService() {
        google.charts.load('current', { 'packages': ['corechart'] });
    }
    GoogleChartsBaseService.prototype.buildChart = function (data, chartFunc, options) {
        var func = function (chartFunc, options) {
            var datatable = google.visualization.arrayToDataTable(data);
            chartFunc().draw(datatable, options);
        };
        var callback = function () { return func(chartFunc, options); };
        google.charts.setOnLoadCallback(callback);
    };
    return GoogleChartsBaseService;
}());



/***/ }),

/***/ "./app/Services/google-column-chart.service.ts":
/*!*****************************************************!*\
  !*** ./app/Services/google-column-chart.service.ts ***!
  \*****************************************************/
/*! exports provided: GoogleColumnChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleColumnChartService", function() { return GoogleColumnChartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _google_charts_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google-charts.base.service */ "./app/Services/google-charts.base.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");



var GoogleColumnChartService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GoogleColumnChartService, _super);
    function GoogleColumnChartService() {
        return _super.call(this) || this;
    }
    GoogleColumnChartService.prototype.BuildColumnChart = function (elementId, data) {
        var chartFunc = function () { return new google.visualization.ColumnChart(document.getElementById(elementId)); };
        var options = {
            legend: { position: 'top', maxLines: 3, textStyle: { color: 'black', fontSize: 16 } },
            isStacked: true,
            colors: ['#FF0000', '#ffbf00', '#32CD32'],
            vAxis: {
                minValue: 0,
                ticks: [0, 3, 6, 9]
            }
        };
        this.buildChart(data, chartFunc, options);
    };
    GoogleColumnChartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GoogleColumnChartService);
    return GoogleColumnChartService;
}(_google_charts_base_service__WEBPACK_IMPORTED_MODULE_1__["GoogleChartsBaseService"]));



/***/ }),

/***/ "./app/app.component.html":
/*!********************************!*\
  !*** ./app/app.component.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dashboard></dashboard>"

/***/ }),

/***/ "./app/app.component.ts":
/*!******************************!*\
  !*** ./app/app.component.ts ***!
  \******************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Dashboard';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./app.component.html */ "./app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/*!***************************!*\
  !*** ./app/app.module.ts ***!
  \***************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./app/app.component.ts");
/* harmony import */ var _Dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Dashboard/dashboard.component */ "./app/Dashboard/dashboard.component.ts");
/* harmony import */ var _CustomerSenese_customersense_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CustomerSenese/customersense.component */ "./app/CustomerSenese/customersense.component.ts");
/* harmony import */ var _Services_dashboardService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Services/dashboardService */ "./app/Services/dashboardService.ts");
/* harmony import */ var _Services_customersense__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Services/customersense */ "./app/Services/customersense.ts");
/* harmony import */ var _Services_google_charts_base_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Services/google-charts.base.service */ "./app/Services/google-charts.base.service.ts");
/* harmony import */ var _Services_google_column_chart_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Services/google-column-chart.service */ "./app/Services/google-column-chart.service.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _Dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["Dashboard"],
                _CustomerSenese_customersense_component__WEBPACK_IMPORTED_MODULE_6__["customersense"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [_Services_dashboardService__WEBPACK_IMPORTED_MODULE_7__["dashboardService"], _Services_google_charts_base_service__WEBPACK_IMPORTED_MODULE_9__["GoogleChartsBaseService"], _Services_google_column_chart_service__WEBPACK_IMPORTED_MODULE_10__["GoogleColumnChartService"], _Services_customersense__WEBPACK_IMPORTED_MODULE_8__["customersenseService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./environments/environment.ts":
/*!*************************************!*\
  !*** ./environments/environment.ts ***!
  \*************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./main.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Project\Organization\IQDashboard_New\Presentation\IQDashboard.Web\ClientApp\main.ts */"./main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map