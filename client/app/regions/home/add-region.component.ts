import {Component, Input,OnInit} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Headers, Http} from '@angular/http';

import { ActivatedRoute, Params} from '@angular/router';
import { Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';


import {RegionService} from '../shared/region.service';
@Component({
	moduleId:module.id,

	selector: 'my-add-region',
	templateUrl:'add-region.component.html',

})
export class AddRegionComponent implements OnInit{
  private id=-1;
  private title="Add new Region!";
  private regionsurl = "api/regions/";
	constructor(
		private regionService: RegionService,
		private route:ActivatedRoute,
		private location:Location,
    private http:Http

		){}
	ngOnInit(): void{
    this.route.params
//      .switchMap((params: Params) => this.regionService.getRegion(params['id']))
      .subscribe(params => {
        if(params['id'])
          //this.regionService.getRegion(params['id'])
          this.http.get(this.regionsurl + params['id'])
            .map(res =>res.json())
            .subscribe(region =>{this.region = region;this.id = params['id'];this.title="Edit Region";this.btn_name="Save";});
      });
	}
	goBack():void{
		this.location.back();
	}
	add(){
    if(this.id != -1)
    {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.put(this.regionsurl + this.region._id, JSON.stringify(this.region), {headers: headers})
        .subscribe(x =>{
          this.goBack();
        });
    }
    else {
      let headers= new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post(this.regionsurl, JSON.stringify(this.region), {headers: headers})
        .subscribe(x => {
          this.goBack();
        });
    }
}
@Input()
private region={
  _id:'',
  region_name:'',
  description:'',
};
  region_name:string;
  btn_name="Add";
}
