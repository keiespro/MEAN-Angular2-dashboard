import {Component, Input,OnInit} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Headers, Http} from '@angular/http';

import { ActivatedRoute, Params} from '@angular/router';
import { Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';


@Component({
	moduleId:module.id,

	selector: 'my-add-profile',
	templateUrl:'add-profile.component.html',

})
export class AddProfileComponent implements OnInit{
  private id=-1;
  private title="Add new Profile!";
  public profilesurl = "api/profiles/";
	constructor(
    private http:Http,
		private route:ActivatedRoute,
		private location:Location

		){}
	ngOnInit(): void{
    this.route.params
      .subscribe(params => {
        if(params['id'])
          this.http.get(this.profilesurl + params['id'])
            .map(res =>res.json())
            .subscribe(profile =>{this.profile = profile;this.id = params['id'];this.title="Edit Profile";this.btn_name="Save";});
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
      this.http.put(this.profilesurl + this.profile._id, JSON.stringify(this.profile), {headers: headers})
        .subscribe(x =>{
          this.goBack();
        });
    }
    else {
      let headers= new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post(this.profilesurl, JSON.stringify(this.profile), {headers: headers})
        .subscribe(x => {
          this.goBack();
        });
    }
}
@Input()
  btn_name="Add";
  private profile={
    _id:'',
    name:'',
    amount_per_msg:'',
    amount_per_kbyte:'',
    amount_per_api:'',
    state:'',
    unit:''
  };
}
