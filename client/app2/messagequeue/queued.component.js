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
var QueuedComponent = (function () {
    function QueuedComponent(router, http) {
        this.router = router;
        this.http = http;
        this.servicetemplates = [];
        this.rowsOnPage_st = 10;
        this.rowsOnPage_msg = 10;
        this.selected_st_id = -1;
        this.messages = [];
        this.temp = [];
        this.name = 'Angular';
        this.title = 'Submitted Messages';
        this.getServiceTemplates();
    }
    QueuedComponent.prototype.ngOnInit = function () {
    };
    QueuedComponent.prototype.getServiceTemplates = function () {
        var _this = this;
        this.http.get('api/servicetemplates/')
            .map(function (res) { return res.json(); })
            .subscribe(function (servicetemplates) { _this.servicetemplates = servicetemplates; });
    };
    QueuedComponent.prototype.st_selected = function (selected_st) {
        var _this = this;
        //console.log(selected_st);
        this.http.get('api/messages/queued/' + selected_st._id)
            .map(function (res) { return res.json(); })
            .subscribe(function (messages) { _this.messages = messages; _this.temp = messages; });
    };
    QueuedComponent.prototype.updateFilter = function (event, key) {
        var val = event.target.value;
        var temp;
        if (key == 'date') {
            temp = this.temp.filter(function (d) {
                return d.queue_entry_time.date.toLowerCase().indexOf(val) !== -1 || !val;
            });
        }
        else {
            temp = this.temp.filter(function (d) {
                return d[key].toLowerCase().indexOf(val) !== -1 || !val;
            });
        }
        // update the rows
        this.messages = temp;
    };
    QueuedComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-queued',
            templateUrl: 'queued.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http])
    ], QueuedComponent);
    return QueuedComponent;
}());
exports.QueuedComponent = QueuedComponent;
//# sourceMappingURL=queued.component.js.map