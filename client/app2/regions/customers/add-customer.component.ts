import {Component, Input,OnInit} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Headers, Http} from '@angular/http';

import { ActivatedRoute, Params} from '@angular/router';
import { Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';


@Component({
	moduleId:module.id,

	selector: 'my-add-customer',
	templateUrl:'add-customer.component.html',

})
export class AddCustomerComponent implements OnInit{
  private id=-1;
  private title="Add new Customer!";
  public customersurl = "api/customers/";
	constructor(
    private http:Http,
		private route:ActivatedRoute,
		private location:Location

		){}
	ngOnInit(): void{
    this.route.params
      .subscribe(params => {
        if(params['id'])
          this.http.get(this.customersurl + params['id'])
            .map(res =>res.json())
            .subscribe(customer =>{this.customer = customer;this.id = params['id'];this.title="Edit Customer";this.btn_name="Save";});
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
      this.http.put(this.customersurl + this.customer._id, JSON.stringify(this.customer), {headers: headers})
        .subscribe(x =>{
          this.goBack();
        });
    }
    else {
      let headers= new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post(this.customersurl, JSON.stringify(this.customer), {headers: headers})
        .subscribe(x => {
          this.goBack();
        });
    }
}
@Input()
  btn_name="Add";
  private customer={
    _id:'',
    partner_name:'',
    name:'',
    address:'',
    customer_type:'',
    st_ac:0,
    payment_account:''
  };
}
