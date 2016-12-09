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
var DashboardComponent = (function () {
    function DashboardComponent(router, http) {
        this.router = router;
        this.http = http;
        this.rowsOnPage_st = 5;
        this.rowsOnPage_devices = 5;
        this.rowsOnPage_contracts = 5;
        this.rowsOnPage_profiles = 5;
        this.servicetemplates = [];
        this.devices = [];
        this.contracts = [];
        this.profiles = [];
        this.getServiceTemplates();
        this.getDevices();
        this.getContracts();
        this.getProfiles();
    }
    DashboardComponent.prototype.getServiceTemplates = function () {
        var _this = this;
        this.http.get('api/servicetemplates/')
            .map(function (res) { return res.json(); })
            .subscribe(function (servicetemplates) { _this.servicetemplates = servicetemplates; });
    };
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.gotoAddServiceTemplate = function () {
        this.router.navigate(['ct/addservicetemplate']);
    };
    DashboardComponent.prototype.deleteServiceTemplate = function (i) {
        var _this = this;
        this.http.delete('api/servicetemplates/' + this.servicetemplates[i]._id)
            .map(function (res) { return res.json(); })
            .subscribe(function (x) { _this.servicetemplates.splice(i, 1); });
        ;
    };
    DashboardComponent.prototype.editServiceTemplate = function (i) {
        this.router.navigate(['ct/editservicetemplate/', this.servicetemplates[i]._id]);
    };
    DashboardComponent.prototype.detailServiceTemplate = function (i) {
        this.router.navigate(['ct/detailservicetemplate/', this.servicetemplates[i]._id]);
    };
    //Devices
    DashboardComponent.prototype.getDevices = function () {
        var _this = this;
        this.http.get('api/devices/')
            .map(function (res) { return res.json(); })
            .subscribe(function (devices) { _this.devices = devices; });
    };
    //Contracts
    DashboardComponent.prototype.getContracts = function () {
        var _this = this;
        this.http.get('api/contracts/')
            .map(function (res) { return res.json(); })
            .subscribe(function (contracts) { _this.contracts = contracts; });
    };
    //tariff profiles
    DashboardComponent.prototype.getProfiles = function () {
        var _this = this;
        this.http.get('api/profiles/')
            .map(function (res) { return res.json(); })
            .subscribe(function (profiles) { _this.profiles = profiles; });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            moduleId: module.id,
            templateUrl: 'dashboard.component.html',
            styleUrls: ['dashboard.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map