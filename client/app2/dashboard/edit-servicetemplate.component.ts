import {Component, Input,OnInit} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Headers, Http} from '@angular/http';
import { Router} from'@angular/router';

import { ActivatedRoute, Params} from '@angular/router';
import { Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';


@Component({
	moduleId:module.id,

	selector: 'my-edit-servicetemplate',
	templateUrl:'edit-servicetemplate.component.html',

})
export class EditServiceTemplateComponent implements OnInit{
  private id=-1;
  private title="Service Template";
  private rowsOnPage=5;
  public apiurl = "api/servicetemplates/";
  public servicetemplate;
  public connectionprofiles;

  public newconnection={
    profile_priority:2,
    customer_id:'',
    connection_type:'Rest-API',
    assigned_server:'',
    customer_backhaul_settings:
    [{
      loginid:'',
      password:'',
      remote_host:'',
      token_id:'',
      uplink_route:'',
      downlink_route:'',
      error_route:'',
      hello_route:'',
      amqp_pub_code:'',
      amqp_sub_code:'',
    }]
  };
	constructor(
    private router:Router,
    private http:Http,
		private route:ActivatedRoute,
		private location:Location

		){
    this.route.params
      .subscribe(params => {
        if(params['id'])
          this.http.get(this.apiurl + params['id'])
            .map(res =>res.json())
            .subscribe(servicetemplate =>{
              this.servicetemplate = servicetemplate;this.id = params['id'];;this.btn_name="Save";

              this.getConnectionProfiles(this.servicetemplate.customer_id);
              this.newconnection.customer_id =this.servicetemplate.customer_id;
//              this.servicetemplate.dedicated_connection_profile= (this.servicetemplate.dedicated_connection_profile === "true");
              this.input_disabled = this.servicetemplate.dedicated_connection_profile;
            });
      });
  }
	ngOnInit(): void{
	}
	goBack():void{
		this.location.back();
	}

  getConnectionProfiles(customer_id){
    this.http.get('api/connectionprofiles/customer_id/' + customer_id)
      .map(res =>res.json())
      .subscribe(connectionprofiles =>{
        this.connectionprofiles = connectionprofiles;
        //this.connectionprofiles.dedicat
        console.log(this.connectionprofiles);
      });

  }
  saveServiceTemplate():void{
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //this.servicetemplate.state = + this.servicetemplate.state;
    this.http.put(this.apiurl + this.servicetemplate._id, JSON.stringify(this.servicetemplate), {headers: headers})
      .subscribe(x =>{
        //this.goBack();
        this.getConnectionProfiles(this.servicetemplate.customer_id);
        alert('Successfully Saved');
      });

}
addConnectionProfile():void{
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  //this.servicetemplate.state = + this.servicetemplate.state;
  this.http.post('api/connectionprofiles', JSON.stringify(this.newconnection), {headers: headers})
    .subscribe(x =>{
      //this.goBack();
      this.getConnectionProfiles(this.servicetemplate.customer_id);

      alert('Successfully Added');
    });

}
dedicate_changed(){
  this.input_disabled =this.servicetemplate.dedicated_connection_profile;
  //console.log(this.servicetemplate.dedicated_connection_profile);
  if(this.input_disabled == true)
  {
    this.newconnection={
      profile_priority:2,
      customer_id:'',
      connection_type:'Rest-API',
      assigned_server:'',
      customer_backhaul_settings:
        [{
          loginid:'',
          password:'',
          remote_host:'',
          token_id:'',
          uplink_route:'',
          downlink_route:'',
          error_route:'',
          hello_route:'',
          amqp_pub_code:'',
          amqp_sub_code:'',
        }]
    };
  }
  else {
    if(this.connectionprofiles.length > 0)
      this.newconnection = this.connectionprofiles[0];
  }
}


  @Input()
  btn_name="Add";
  public input_disabled=false;

}
