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
var AddProfileComponent = (function () {
    function AddProfileComponent(http, route, location) {
        this.http = http;
        this.route = route;
        this.location = location;
        this.id = -1;
        this.title = "Add new Profile!";
        this.profilesurl = "api/profiles/";
        this.btn_name = "Add";
        this.profile = {
            _id: '',
            name: '',
            amount_per_msg: '',
            amount_per_kbyte: '',
            amount_per_api: '',
            state: '',
            unit: ''
        };
    }
    AddProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            if (params['id'])
                _this.http.get(_this.profilesurl + params['id'])
                    .map(function (res) { return res.json(); })
                    .subscribe(function (profile) { _this.profile = profile; _this.id = params['id']; _this.title = "Edit Profile"; _this.btn_name = "Save"; });
        });
    };
    AddProfileComponent.prototype.goBack = function () {
        this.location.back();
    };
    AddProfileComponent.prototype.add = function () {
        var _this = this;
        if (this.id != -1) {
            var headers = new http_1.Headers();
            headers.append('Content-Type', 'application/json');
            this.http.put(this.profilesurl + this.profile._id, JSON.stringify(this.profile), { headers: headers })
                .subscribe(function (x) {
                _this.goBack();
            });
        }
        else {
            var headers = new http_1.Headers();
            headers.append('Content-Type', 'application/json');
            this.http.post(this.profilesurl, JSON.stringify(this.profile), { headers: headers })
                .subscribe(function (x) {
                _this.goBack();
            });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AddProfileComponent.prototype, "btn_name", void 0);
    AddProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-add-profile',
            templateUrl: 'add-profile.component.html',
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.ActivatedRoute, common_1.Location])
    ], AddProfileComponent);
    return AddProfileComponent;
}());
exports.AddProfileComponent = AddProfileComponent;
//# sourceMappingURL=add-profile.component.js.map