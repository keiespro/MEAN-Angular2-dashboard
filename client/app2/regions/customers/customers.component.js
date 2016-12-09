"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var CustomersComponent = (function () {
    function CustomersComponent(router, http) {
        this.router = router;
        this.http = http;
        this.rowsOnPage = 10;
        this.customers = [];
        this.customersurl = "api/customers/";
        this.name = 'Angular';
        this.title = 'Customers';
    }
    CustomersComponent.prototype.ngOnInit = function () {
        this.customers = [];
        this.getCustomers();
    };
    CustomersComponent.prototype.getCustomers = function () {
        var _this = this;
        this.http.get(this.customersurl)
            .map(function (res) { return res.json(); })
            .subscribe(function (customers) { _this.customers = customers; });
    };
    CustomersComponent.prototype.gotoAddCustomer = function () {
        this.router.navigate(['/addcustomer']);
    };
    CustomersComponent.prototype.deleteCustomer = function (i) {
        var _this = this;
        this.http.delete(this.customersurl + this.customers[i]._id)
            .map(function (res) { return res.json(); })
            .subscribe(function (x) { _this.customers.splice(i, 1); console.log(_this.customers); });
        ;
    };
    CustomersComponent.prototype.editCustomer = function (i) {
        this.router.navigate(['/editcustomer/', this.customers[i]._id]);
    };
    CustomersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-customers',
            templateUrl: 'customers.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http])
    ], CustomersComponent);
    return CustomersComponent;
}());
exports.CustomersComponent = CustomersComponent;
//# sourceMappingURL=customers.component.js.map