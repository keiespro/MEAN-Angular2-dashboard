import { Component,OnInit } from '@angular/core';
import { Router} from'@angular/router';

import { Headers, Http} from '@angular/http';
import'rxjs/add/operator/toPromise';

@Component({
  selector: 'my-dashboard',
  moduleId:module.id,
  templateUrl:'dashboard.component.html',
  styleUrls:['dashboard.component.css'],
//  template: '<h3>My Dashboard</h3>'
})
export class DashboardComponent implements OnInit {
	public rowsOnPage_st = 5;
  public rowsOnPage_devices=5;
  public rowsOnPage_contracts = 5;
  public rowsOnPage_profiles = 5;
 public servicetemplates=[];devices=[];contracts=[];profiles=[];
    constructor(
      private router:Router,
      private http:Http
    ){
      this.getServiceTemplates();
      this.getDevices();
      this.getContracts();
      this.getProfiles();
    }
    getServiceTemplates():void{
      this.http.get('api/servicetemplates/')
        .map(res =>res.json())
        .subscribe(servicetemplates => {this.servicetemplates = servicetemplates;});
    }
ngOnInit():void{
}
public gotoAddServiceTemplate():void{
  this.router.navigate(['ct/addservicetemplate']);
}
  deleteServiceTemplate(i):void{
    this.http.delete('api/servicetemplates/' + this.servicetemplates[i]._id)
      .map(res =>res.json())
      .subscribe(x =>{this.servicetemplates.splice(i,1);});
    ;
  }
  editServiceTemplate(i){
    this.router.navigate(['ct/editservicetemplate/',this.servicetemplates[i]._id])
  }
  detailServiceTemplate(i){
    this.router.navigate(['ct/detailservicetemplate/',this.servicetemplates[i]._id])
  }


  //Devices
  getDevices():void{
    this.http.get('api/devices/')
      .map(res =>res.json())
      .subscribe(devices => {this.devices = devices;});
  }


  //Contracts
  getContracts():void{
    this.http.get('api/contracts/')
      .map(res =>res.json())
      .subscribe(contracts => {this.contracts = contracts;});

  }

  //tariff profiles
  getProfiles():void{
    this.http.get('api/profiles/')
      .map(res =>res.json())
      .subscribe(profiles => {this.profiles = profiles;});


  }

}
