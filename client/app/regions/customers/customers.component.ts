import { Component,OnInit } from '@angular/core';
import { Router} from'@angular/router';

import { Headers, Http} from '@angular/http';

import'rxjs/add/operator/toPromise';

@Component({
  moduleId: module.id,
  selector: 'my-customers',
  templateUrl:'customers.component.html',


})
export class CustomersComponent implements OnInit  {
  public rowsOnPage=10;
 customers =[];
  public customersurl = "api/customers/";
  constructor(
    private router: Router,private http:Http){}
	ngOnInit():void{
    this.customers=[];
		this.getCustomers();
	}
 name = 'Angular';
 title = 'Customers';

 getCustomers():void{
   this.http.get(this.customersurl)
   .map(res =>res.json())
   .subscribe(customers => {this.customers = customers;});


 }
gotoAddCustomer():void{
  this.router.navigate(['/addcustomer']);
}
deleteCustomer(i):void{
  this.http.delete(this.customersurl + this.customers[i]._id)
    .map(res =>res.json())
    .subscribe(x =>{this.customers.splice(i,1);console.log(this.customers);});
  ;
}
editCustomer(i){
  this.router.navigate(['/editcustomer/',this.customers[i]._id])
}

 /*
 onSelect(hero):void{
 	this.selectedHero = hero;
 }
 gotoDetail():void{
   this.router.navigate(['/detail',this.selectedHero.id]);
 }
 add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.heroService.create(name)
    .then(hero => {
      this.heroes.push(hero);
      this.selectedHero = null;
    });
}
delete(hero: Hero): void {
  this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
}*/
  }
