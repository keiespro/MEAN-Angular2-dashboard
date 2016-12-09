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
var NetworksComponent = (function () {
    function NetworksComponent(router, http) {
        this.router = router;
        this.http = http;
        this.rowsOnPage = 10;
        this.networks = [];
        this.networksurl = "api/networks/";
        this.name = 'Angular';
        this.title = 'Network Labels';
    }
    NetworksComponent.prototype.ngOnInit = function () {
        this.networks = [];
        this.getNetworks();
    };
    NetworksComponent.prototype.getNetworks = function () {
        var _this = this;
        this.http.get(this.networksurl)
            .map(function (res) { return res.json(); })
            .subscribe(function (networks) { _this.networks = networks; });
    };
    NetworksComponent.prototype.gotoAddNetwork = function () {
        this.router.navigate(['/addnetwork']);
    };
    NetworksComponent.prototype.deleteNetwork = function (i) {
        var _this = this;
        this.http.delete(this.networksurl + this.networks[i]._id)
            .map(function (res) { return res.json(); })
            .subscribe(function (x) { _this.networks.splice(i, 1); console.log(_this.networks); });
        ;
    };
    NetworksComponent.prototype.editNetwork = function (i) {
        this.router.navigate(['/editnetwork/', this.networks[i]._id]);
    };
    NetworksComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-networks',
            templateUrl: 'networks.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http])
    ], NetworksComponent);
    return NetworksComponent;
}());
exports.NetworksComponent = NetworksComponent;
//# sourceMappingURL=networks.component.js.map