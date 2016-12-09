import {Component, Input,OnInit} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Headers, Http} from '@angular/http';

import { ActivatedRoute, Params} from '@angular/router';
import { Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';


@Component({
	moduleId:module.id,

	selector: 'my-add-network',
	templateUrl:'add-network.component.html',

})
export class AddNetworkComponent implements OnInit{
  private id=-1;
  private title="Add new Network!";
  public networksurl = "api/networks/";
	constructor(
    private http:Http,
		private route:ActivatedRoute,
		private location:Location

		){}
	ngOnInit(): void{
    this.route.params
      .subscribe(params => {
        if(params['id'])
          this.http.get(this.networksurl + params['id'])
            .map(res =>res.json())
            .subscribe(network =>{this.network = network;this.id = params['id'];this.title="Edit Network";this.btn_name="Save";});
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
      this.http.put(this.networksurl + this.network._id, JSON.stringify(this.network), {headers: headers})
        .subscribe(x =>{
          this.goBack();
        });
    }
    else {
      let headers= new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post(this.networksurl, JSON.stringify(this.network), {headers: headers})
        .subscribe(x => {
          this.goBack();
        });
    }
}
@Input()
  btn_name="Add";
  private network={
    _id:'',
    label_name:'',
    label_description:'',
    port:'',
    protocol:'',
    customer_name:''
  };
}
