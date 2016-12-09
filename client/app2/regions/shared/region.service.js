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
require('rxjs/add/operator/toPromise');
var RegionService = (function () {
    function RegionService(http) {
        this.http = http;
        this.regionsurl = 'api/regions/';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    RegionService.prototype.getRegions = function () {
        return this.http.get(this.regionsurl); /*
        .toPromise()
        .then(response =>response.json() as any[])
        .catch(this.handleError);*/
        //return Promise.resolve( HEROES);
        //return this.http.get('json/Region.json');
    };
    RegionService.prototype.create = function (name) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.regionsurl, JSON.stringify({ region_name: name }), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    RegionService.prototype.getRegion = function (id) {
        return this.http.get(this.regionsurl + id);
    };
    RegionService.prototype.delete = function (id) {
        return this.http.delete(this.regionsurl + id);
    };
    RegionService.prototype.edit = function (region) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.regionsurl + region._id, JSON.stringify(region), { headers: headers });
    };
    RegionService.prototype.handleError = function (error) {
        console.error('An error has  occured', error);
        return Promise.reject(error.message || error);
    }; /*
    getRegion(id : number){
        return this.getHeroes()
            .then(heroes =>heroes.find(hero => hero.id === id));
    }


update(hero):{
  const url = `${this.heroesUrl}/${hero.id}`;
  return this.http
    .put(url, JSON.stringify(hero), {headers: this.headers})
    .toPromise()
    .then(() => hero)
    .catch(this.handleError);
}
create(name: string): Promise<Hero> {
  return this.http
    .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
    .toPromise()
    .then(res => res.json().data)
    .catch(this.handleError);
}
delete(id: number): Promise<void> {
  const url = `${this.heroesUrl}/${id}`;
  return this.http.delete(url, {headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
}
*/
    RegionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RegionService);
    return RegionService;
}());
exports.RegionService = RegionService;
//# sourceMappingURL=region.service.js.map