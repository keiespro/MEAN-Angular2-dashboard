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
var EditServiceTemplateComponent = (function () {
    function EditServiceTemplateComponent(router, http, route, location) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.route = route;
        this.location = location;
        this.id = -1;
        this.title = "Service Template";
        this.rowsOnPage = 5;
        this.apiurl = "api/servicetemplates/";
        this.newconnection = {
            profile_priority: 2,
            customer_id: '',
            connection_type: 'Rest-API',
            assigned_server: '',
            customer_backhaul_settings: [{
                    loginid: '',
                    password: '',
                    remote_host: '',
                    token_id: '',
                    uplink_route: '',
                    downlink_route: '',
                    error_route: '',
                    hello_route: '',
                    amqp_pub_code: '',
                    amqp_sub_code: '',
                }]
        };
        this.btn_name = "Add";
        this.input_disabled = false;
        this.route.params
            .subscribe(function (params) {
            if (params['id'])
                _this.http.get(_this.apiurl + params['id'])
                    .map(function (res) { return res.json(); })
                    .subscribe(function (servicetemplate) {
                    _this.servicetemplate = servicetemplate;
                    _this.id = params['id'];
                    ;
                    _this.btn_name = "Save";
                    _this.getConnectionProfiles(_this.servicetemplate.customer_id);
                    _this.newconnection.customer_id = _this.servicetemplate.customer_id;
                    //              this.servicetemplate.dedicated_connection_profile= (this.servicetemplate.dedicated_connection_profile === "true");
                    _this.input_disabled = _this.servicetemplate.dedicated_connection_profile;
                });
        });
    }
    EditServiceTemplateComponent.prototype.ngOnInit = function () {
    };
    EditServiceTemplateComponent.prototype.goBack = function () {
        this.location.back();
    };
    EditServiceTemplateComponent.prototype.getConnectionProfiles = function (customer_id) {
        var _this = this;
        this.http.get('api/connectionprofiles/customer_id/' + customer_id)
            .map(function (res) { return res.json(); })
            .subscribe(function (connectionprofiles) {
            _this.connectionprofiles = connectionprofiles;
            //this.connectionprofiles.dedicat
            console.log(_this.connectionprofiles);
        });
    };
    EditServiceTemplateComponent.prototype.saveServiceTemplate = function () {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        //this.servicetemplate.state = + this.servicetemplate.state;
        this.http.put(this.apiurl + this.servicetemplate._id, JSON.stringify(this.servicetemplate), { headers: headers })
            .subscribe(function (x) {
            //this.goBack();
            _this.getConnectionProfiles(_this.servicetemplate.customer_id);
            alert('Successfully Saved');
        });
    };
    EditServiceTemplateComponent.prototype.addConnectionProfile = function () {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        //this.servicetemplate.state = + this.servicetemplate.state;
        this.http.post('api/connectionprofiles', JSON.stringify(this.newconnection), { headers: headers })
            .subscribe(function (x) {
            //this.goBack();
            _this.getConnectionProfiles(_this.servicetemplate.customer_id);
            alert('Successfully Added');
        });
    };
    EditServiceTemplateComponent.prototype.dedicate_changed = function () {
        this.input_disabled = this.servicetemplate.dedicated_connection_profile;
        //console.log(this.servicetemplate.dedicated_connection_profile);
        if (this.input_disabled == true) {
            this.newconnection = {
                profile_priority: 2,
                customer_id: '',
                connection_type: 'Rest-API',
                assigned_server: '',
                customer_backhaul_settings: [{
                        loginid: '',
                        password: '',
                        remote_host: '',
                        token_id: '',
                        uplink_route: '',
                        downlink_route: '',
                        error_route: '',
                        hello_route: '',
                        amqp_pub_code: '',
                        amqp_sub_code: '',
                    }]
            };
        }
        else {
            if (this.connectionprofiles.length > 0)
                this.newconnection = this.connectionprofiles[0];
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], EditServiceTemplateComponent.prototype, "btn_name", void 0);
    EditServiceTemplateComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-edit-servicetemplate',
            templateUrl: 'edit-servicetemplate.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http, router_2.ActivatedRoute, common_1.Location])
    ], EditServiceTemplateComponent);
    return EditServiceTemplateComponent;
}());
exports.EditServiceTemplateComponent = EditServiceTemplateComponent;
//# sourceMappingURL=edit-servicetemplate.component.js.map