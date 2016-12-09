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
var region_service_1 = require('../shared/region.service');
var HomeComponent = (function () {
    function HomeComponent(router, regionService) {
        this.router = router;
        this.regionService = regionService;
        this.rowsOnPage = 10;
        this.regions = [];
        this.name = 'Angular';
        this.title = 'Regions';
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.regions = [];
        this.getRegions();
    };
    HomeComponent.prototype.getRegions = function () {
        var _this = this;
        this.regionService.getRegions()
            .map(function (res) { return res.json(); })
            .subscribe(function (regions) { _this.regions = regions; console.log(_this.regions); });
        //.then(regions=>{ this.regions = regions;console.log(regions)});
    };
    HomeComponent.prototype.gotoAddRegion = function () {
        this.router.navigate(['/addregion']);
    };
    HomeComponent.prototype.deleteRegion = function (i) {
        var _this = this;
        this.regionService.delete(this.regions[i]._id)
            .map(function (res) { return res.json(); })
            .subscribe(function (x) { _this.regions.splice(i, 1); console.log(_this.regions); });
        ;
    };
    HomeComponent.prototype.editRegion = function (i) {
        this.router.navigate(['/editregion/', this.regions[i]._id]);
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-home',
            templateUrl: 'home.component.html',
            providers: [region_service_1.RegionService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, region_service_1.RegionService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map