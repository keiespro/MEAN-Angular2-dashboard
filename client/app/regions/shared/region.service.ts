import {Injectable} from '@angular/core';
import { Headers, Http} from '@angular/http';

import'rxjs/add/operator/toPromise';


@Injectable()
export class RegionService{
	private regionsurl = 'api/regions/';
	private headers = new Headers({'Content-Type': 'application/json'});
	constructor(private http:Http){}
	getRegions(){

		return this.http.get(this.regionsurl);/*
		.toPromise()
		.then(response =>response.json() as any[])
		.catch(this.handleError);*/

		//return Promise.resolve( HEROES);
		//return this.http.get('json/Region.json');
	}
	create(name){
		let headers= new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.regionsurl, JSON.stringify({region_name:name}), {headers: headers})
      .map(res => res.json());
	}
	getRegion(id){
    return this.http.get(this.regionsurl + id);
  }
	delete(id){

    return this.http.delete(this.regionsurl+id);
  }
  edit(region){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.regionsurl + region._id, JSON.stringify(region), {headers: headers});
  }

	private handleError(error: any): Promise<any>{
		console.error('An error has  occured',error);
		return Promise.reject(error.message  || error);
	}/*
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
}
