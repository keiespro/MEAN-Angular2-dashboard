import { Component,OnInit } from '@angular/core';
import { Router} from'@angular/router';

import { Headers, Http} from '@angular/http';

import'rxjs/add/operator/toPromise';

@Component({
  moduleId: module.id,
  selector: 'my-contracts',
  templateUrl:'contracts.component.html',
})
export class ContractsComponent implements OnInit  {
  public rowsOnPage=10;
  contracts =[];
  public contractsurl = "api/contracts/";
  constructor(
    private router: Router,private http:Http){}
	ngOnInit():void{
    this.contracts=[];
		this.getContracts();
	}
 name = 'Angular';
 title = 'Contract Labels';

 getContracts():void{
   this.http.get(this.contractsurl)
   .map(res =>res.json())
   .subscribe(contracts => {this.contracts = contracts;});


 }
gotoAddContract():void{
  this.router.navigate(['/addcontract']);
}
deleteContract(i):void{
  this.http.delete(this.contractsurl + this.contracts[i]._id)
    .map(res =>res.json())
    .subscribe(x =>{this.contracts.splice(i,1);console.log(this.contracts);});
  ;
}
editContract(i){
  this.router.navigate(['/editcontract/',this.contracts[i]._id])
}


  }
