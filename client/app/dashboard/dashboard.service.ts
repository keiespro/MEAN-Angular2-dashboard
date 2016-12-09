import {Injectable} from '@angular/core';
import { Headers, Http} from '@angular/http';

import'rxjs/add/operator/toPromise';

import {Dash} from './dash';



@Injectable()
export class DashService{
	private dashesUrl = 'app/dashboard/dash.json';
	constructor(private http:Http){}
	getDashes(): Promise<Dash[]>{
        return this.http.get(this.dashesUrl)
        .toPromise()
        .then(response =>response.json() as Dash[])
        .catch(this.handleError);
/*
		return this.http.get(this.dashesUrl)
		.toPromise()
		.then(response =>response.json().data as Dash[])
		.catch(this.handleError);
*/
		//return Promise.resolve( DASHES);
	}
	private handleError(error: any): Promise<any>{
		console.error('An error has  occured',error);
		return Promise.reject(error.message  || error);
	}
	getDash(id : number): Promise<Dash>{
		return this.getDashes()
			.then(dashes =>dashes.find(dash => dash.id === id));
	}

	private headers = new Headers({'Content-Type': 'application/json'});
/*
update(dash: Dash): Promise<Dash> {
  const url = `${this.dashesUrl}/${dash.id}`;
  return this.http
    .put(url, JSON.stringify(dash), {headers: this.headers})
    .toPromise()
    .then(() => dash)
    .catch(this.handleError);
}
create(name: string): Promise<Dash> {
  return this.http
    .post(this.dashesUrl, JSON.stringify({name: name}), {headers: this.headers})
    .toPromise()
    .then(res => res.json().data)
    .catch(this.handleError);
}
delete(id: number): Promise<void> {
  const url = `${this.dashesUrl}/${id}`;
  return this.http.delete(url, {headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
}*/
}