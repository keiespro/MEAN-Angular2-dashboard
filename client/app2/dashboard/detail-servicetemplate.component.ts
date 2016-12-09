import {Component, Input,OnInit} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Headers, Http} from '@angular/http';
import { Router} from'@angular/router';

import { ActivatedRoute, Params} from '@angular/router';
import { Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';


@Component({
	moduleId:module.id,

	selector: 'my-detail-servicetemplate',
	templateUrl:'detail-servicetemplate.component.html',

})
export class DetailServiceTemplateComponent implements OnInit{
  private id=-1;
  public rowsOnPage_devices=5;
  private title="Service Template";
  public apiurl = "api/servicetemplates/";
  public servicetemplate;public devices=[];
	constructor(
    private router:Router,
    private http:Http,
		private route:ActivatedRoute,
		private location:Location

		){
    this.getDevices();
    this.route.params
      .subscribe(params => {
        if(params['id'])
          this.http.get(this.apiurl + params['id'])
            .map(res =>res.json())
            .subscribe(servicetemplate =>{this.servicetemplate = servicetemplate;this.id = params['id'];;this.btn_name="Save";});
      });

  }
	ngOnInit(): void{
	}
	goBack():void{
    this.router.navigate(['ct/dashboard/']);
	}
  editServiceTemplate():void{
  this.router.navigate(['ct/editservicetemplate/',this.servicetemplate._id]);
}

  //Devices
  getDevices():void{
    this.http.get('api/devices/')
      .map(res =>res.json())
      .subscribe(devices => {this.devices = devices;});
  }


  @Input()
  btn_name="Add";
}
