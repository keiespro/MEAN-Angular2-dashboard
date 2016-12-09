import { Component,OnInit } from '@angular/core';
import { Router} from'@angular/router';

import { Headers, Http} from '@angular/http';

import'rxjs/add/operator/toPromise';

@Component({
  moduleId: module.id,
  selector: 'my-profiles',
  templateUrl:'profiles.component.html',
})
export class ProfilesComponent implements OnInit  {
  public rowsOnPage=10;
  public servicetemplates:any[];
  profiles =[];
  public profilesurl = "api/profiles/";
  constructor(
    private router: Router,private http:Http){}
	ngOnInit():void{
    this.profiles=[];
		this.getProfiles();
	}
 name = 'Angular';
 title = 'Profile Labels';

 getProfiles():void{
   this.http.get(this.profilesurl)
   .map(res =>res.json())
   .subscribe(profiles => {this.profiles = profiles;});


 }
gotoAddProfile():void{
  this.router.navigate(['/addprofile']);
}
deleteProfile(i):void{
  this.http.delete(this.profilesurl + this.profiles[i]._id)
    .map(res =>res.json())
    .subscribe(x =>{this.profiles.splice(i,1);console.log(this.profiles);});
  ;
}
editProfile(i){
  this.router.navigate(['/editprofile/',this.profiles[i]._id])
}


  }
