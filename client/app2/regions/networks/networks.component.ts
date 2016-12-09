import { Component,OnInit } from '@angular/core';
import { Router} from'@angular/router';

import { Headers, Http} from '@angular/http';

import'rxjs/add/operator/toPromise';

@Component({
  moduleId: module.id,
  selector: 'my-networks',
  templateUrl:'networks.component.html',


})
export class NetworksComponent implements OnInit  {
  public rowsOnPage=10;
 networks =[];
  public networksurl = "api/networks/";
  constructor(
    private router: Router,private http:Http){}
	ngOnInit():void{
    this.networks=[];
		this.getNetworks();
	}
 name = 'Angular';
 title = 'Network Labels';

 getNetworks():void{
   this.http.get(this.networksurl)
   .map(res =>res.json())
   .subscribe(networks => {this.networks = networks;});


 }
gotoAddNetwork():void{
  this.router.navigate(['/addnetwork']);
}
deleteNetwork(i):void{
  this.http.delete(this.networksurl + this.networks[i]._id)
    .map(res =>res.json())
    .subscribe(x =>{this.networks.splice(i,1);console.log(this.networks);});
  ;
}
editNetwork(i){
  this.router.navigate(['/editnetwork/',this.networks[i]._id])
}


  }
