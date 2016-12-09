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
var region_service_1 = require('../shared/region.service');
var AddRegionComponent = (function () {
    function AddRegionComponent(regionService, route, location, http) {
        this.regionService = regionService;
        this.route = route;
        this.location = location;
        this.http = http;
        this.id = -1;
        this.title = "Add new Region!";
        this.regionsurl = "api/regions/";
        this.region = {
            _id: '',
            region_name: '',
            description: '',
        };
        this.btn_name = "Add";
    }
    AddRegionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            if (params['id'])
                //this.regionService.getRegion(params['id'])
                _this.http.get(_this.regionsurl + params['id'])
                    .map(function (res) { return res.json(); })
                    .subscribe(function (region) { _this.region = region; _this.id = params['id']; _this.title = "Edit Region"; _this.btn_name = "Save"; });
        });
    };
    AddRegionComponent.prototype.goBack = function () {
        this.location.back();
    };
    AddRegionComponent.prototype.add = function () {
        var _this = this;
        if (this.id != -1) {
            var headers = new http_1.Headers();
            headers.append('Content-Type', 'application/json');
            this.http.put(this.regionsurl + this.region._id, JSON.stringify(this.region), { headers: headers })
                .subscribe(function (x) {
                _this.goBack();
            });
        }
        else {
            var headers = new http_1.Headers();
            headers.append('Content-Type', 'application/json');
            this.http.post(this.regionsurl, JSON.stringify(this.region), { headers: headers })
                .subscribe(function (x) {
                _this.goBack();
            });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AddRegionComponent.prototype, "region", void 0);
    AddRegionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-add-region',
            templateUrl: 'add-region.component.html',
        }), 
        __metadata('design:paramtypes', [region_service_1.RegionService, router_1.ActivatedRoute, common_1.Location, http_1.Http])
    ], AddRegionComponent);
    return AddRegionComponent;
}());
exports.AddRegionComponent = AddRegionComponent;
//# sourceMappingURL=add-region.component.js.map