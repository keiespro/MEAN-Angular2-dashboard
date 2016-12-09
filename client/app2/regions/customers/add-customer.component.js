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
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
require('rxjs/add/operator/switchMap');
var AddCustomerComponent = (function () {
    function AddCustomerComponent(http, route, location) {
        this.http = http;
        this.route = route;
        this.location = location;
        this.id = -1;
        this.title = "Add new Customer!";
        this.customersurl = "api/customers/";
        this.btn_name = "Add";
        this.customer = {
            _id: '',
            partner_name: '',
            name: '',
            address: '',
            customer_type: '',
            st_ac: 0,
            payment_account: ''
        };
    }
    AddCustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            if (params['id'])
                _this.http.get(_this.customersurl + params['id'])
                    .map(function (res) { return res.json(); })
                    .subscribe(function (customer) { _this.customer = customer; _this.id = params['id']; _this.title = "Edit Customer"; _this.btn_name = "Save"; });
        });
    };
    AddCustomerComponent.prototype.goBack = function () {
        this.location.back();
    };
    AddCustomerComponent.prototype.add = function () {
        var _this = this;
        if (this.id != -1) {
            var headers = new http_1.Headers();
            headers.append('Content-Type', 'application/json');
            this.http.put(this.customersurl + this.customer._id, JSON.stringify(this.customer), { headers: headers })
                .subscribe(function (x) {
                _this.goBack();
            });
        }
        else {
            var headers = new http_1.Headers();
            headers.append('Content-Type', 'application/json');
            this.http.post(this.customersurl, JSON.stringify(this.customer), { headers: headers })
                .subscribe(function (x) {
                _this.goBack();
            });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AddCustomerComponent.prototype, "btn_name", void 0);
    AddCustomerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-add-customer',
            templateUrl: 'add-customer.component.html',
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.ActivatedRoute, common_1.Location])
    ], AddCustomerComponent);
    return AddCustomerComponent;
}());
exports.AddCustomerComponent = AddCustomerComponent;
//# sourceMappingURL=add-customer.component.js.map