import { Component,OnInit } from '@angular/core';
import {Dash} from './dash';
import {DashService} from './dashboard.service';

@Component({
  selector: 'my-dashboard',
  moduleId:module.id,
  templateUrl:'dashboard.component.html',
  styleUrls:['dashboard.component.css'],
//  template: '<h3>My Dashboard</h3>'
})
export class DashboardComponent implements OnInit { 
	public rowsOnPage = 10;
 public dashes = [];

    constructor(private dashSerice:DashService){}
ngOnInit():void{
	this.dashSerice.getDashes()
		.then(dashes => {this.dashes = dashes;});
}
}