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
var ContractsComponent = (function () {
    function ContractsComponent(router, http) {
        this.router = router;
        this.http = http;
        this.rowsOnPage = 10;
        this.contracts = [];
        this.contractsurl = "api/contracts/";
        this.name = 'Angular';
        this.title = 'Contract Labels';
    }
    ContractsComponent.prototype.ngOnInit = function () {
        this.contracts = [];
        this.getContracts();
    };
    ContractsComponent.prototype.getContracts = function () {
        var _this = this;
        this.http.get(this.contractsurl)
            .map(function (res) { return res.json(); })
            .subscribe(function (contracts) { _this.contracts = contracts; });
    };
    ContractsComponent.prototype.gotoAddContract = function () {
        this.router.navigate(['/addcontract']);
    };
    ContractsComponent.prototype.deleteContract = function (i) {
        var _this = this;
        this.http.delete(this.contractsurl + this.contracts[i]._id)
            .map(function (res) { return res.json(); })
            .subscribe(function (x) { _this.contracts.splice(i, 1); console.log(_this.contracts); });
        ;
    };
    ContractsComponent.prototype.editContract = function (i) {
        this.router.navigate(['/editcontract/', this.contracts[i]._id]);
    };
    ContractsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-contracts',
            templateUrl: 'contracts.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http])
    ], ContractsComponent);
    return ContractsComponent;
}());
exports.ContractsComponent = ContractsComponent;
//# sourceMappingURL=contracts.component.js.map