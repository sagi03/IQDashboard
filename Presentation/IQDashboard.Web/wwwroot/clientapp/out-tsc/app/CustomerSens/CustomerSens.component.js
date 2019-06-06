import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { customersenseService } from '../Services/customersense';
var customersens = /** @class */ (function () {
    function customersens(data) {
        this.data = data;
        this.customersensedetails = [];
    }
    customersens.prototype.ngOnInit = function () {
        var _this = this;
        var vertical = "fs";
        this.data.loadCustomerSenseDetail(vertical, "May 2019", "Green").subscribe(function (success) {
            if (success) {
                _this.customersensedetails = _this.data.customersensedetails;
            }
        });
    };
    customersens = tslib_1.__decorate([
        Component({
            selector: "customersensmodal",
            templateUrl: "CustomerSens.component.html",
            styles: []
        }),
        tslib_1.__metadata("design:paramtypes", [customersenseService])
    ], customersens);
    return customersens;
}());
export { customersens };
//# sourceMappingURL=CustomerSens.component.js.map