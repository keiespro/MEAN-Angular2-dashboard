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
var router_2 = require('@angular/router');
var common_1 = require('@angular/common');
require('rxjs/add/operator/switchMap');
var DetailServiceTemplateComponent = (function () {
    function DetailServiceTemplateComponent(router, http, route, location) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.route = route;
        this.location = location;
        this.id = -1;
        this.rowsOnPage_devices = 5;
        this.title = "Service Template";
        this.apiurl = "api/servicetemplates/";
        this.devices = [];
        this.btn_name = "Add";
        this.getDevices();
        this.route.params
            .subscribe(function (params) {
            if (params['id'])
                _this.http.get(_this.apiurl + params['id'])
                    .map(function (res) { return res.json(); })
                    .subscribe(function (servicetemplate) { _this.servicetemplate = servicetemplate; _this.id = params['id']; ; _this.btn_name = "Save"; });
        });
    }
    DetailServiceTemplateComponent.prototype.ngOnInit = function () {
    };
    DetailServiceTemplateComponent.prototype.goBack = function () {
        this.router.navigate(['ct/dashboard/']);
    };
    DetailServiceTemplateComponent.prototype.editServiceTemplate = function () {
        this.router.navigate(['ct/editservicetemplate/', this.servicetemplate._id]);
    };
    //Devices
    DetailServiceTemplateComponent.prototype.getDevices = function () {
        var _this = this;
        this.http.get('api/devices/')
            .map(function (res) { return res.json(); })
            .subscribe(function (devices) { _this.devices = devices; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DetailServiceTemplateComponent.prototype, "btn_name", void 0);
    DetailServiceTemplateComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-detail-servicetemplate',
            templateUrl: 'detail-servicetemplate.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http, router_2.ActivatedRoute, common_1.Location])
    ], DetailServiceTemplateComponent);
    return DetailServiceTemplateComponent;
}());
exports.DetailServiceTemplateComponent = DetailServiceTemplateComponent;
//# sourceMappingURL=detail-servicetemplate.component.js.map