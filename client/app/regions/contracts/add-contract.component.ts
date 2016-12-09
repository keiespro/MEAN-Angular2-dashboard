import {Component, Input,OnInit} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Headers, Http} from '@angular/http';

import { ActivatedRoute, Params} from '@angular/router';
import { Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';


@Component({
	moduleId:module.id,

	selector: 'my-add-contract',
	templateUrl:'add-contract.component.html',

})
export class AddContractComponent implements OnInit{
  private tariffs:any[];
  private id=-1;
  private title="Add new Contract!";
  public contractsurl = "api/contracts/";
	constructor(
    private http:Http,
		private route:ActivatedRoute,
		private location:Location

		){}
	ngOnInit(): void{
    this.route.params
      .subscribe(params => {
        if(params['id'])
          this.http.get(this.contractsurl + params['id'])
            .map(res =>res.json())
            .subscribe(contract =>{this.contract = contract;this.id = params['id'];this.title="Edit Contract";this.btn_name="Save";});
      });
    this.http.get("api/profiles")
      .map(res => res.json())
      .subscribe(tariffs => {this.tariffs = tariffs});
	}
	goBack():void{
		this.location.back();
	}
	add(){
    if(this.id != -1)
    {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.put(this.contractsurl + this.contract._id, JSON.stringify(this.contract), {headers: headers})
        .subscribe(x =>{
          this.goBack();
        });
    }
    else {
      let headers= new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post(this.contractsurl, JSON.stringify(this.contract), {headers: headers})
        .subscribe(x => {
          this.goBack();
        });
    }
}
@Input()
  btn_name="Add";
  private contract={
    _id:'',
    contract_id:'',
    customer_name:'',
    account_balance:'',
    contract_duration_months:'',
    signed:'',
    state:'',
    contract_type:'',
    tariff_id:''
  };
}
