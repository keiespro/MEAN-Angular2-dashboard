import { Component,OnInit } from '@angular/core';
import { Router} from'@angular/router';

import { Headers, Http} from '@angular/http';

import'rxjs/add/operator/toPromise';

@Component({
  moduleId: module.id,
  selector: 'my-submitted',
  templateUrl:'submitted.component.html',
})
export class SubmittedComponent implements OnInit  {
  public servicetemplates=[];public rowsOnPage_st = 10;
  public rowsOnPage_msg = 10;
  public selected_st_id = -1;
  public messages=[];
  public temp=[];
  constructor(
    private router: Router,private http:Http){
    this.getServiceTemplates();

  }
	ngOnInit():void{
	}
  getServiceTemplates():void{
    this.http.get('api/servicetemplates/')
      .map(res =>res.json())
      .subscribe(servicetemplates => {this.servicetemplates = servicetemplates;});
  }
  st_selected(selected_st):void{
    //console.log(selected_st);
    this.http.get('api/messages/submitted/'+selected_st._id)
      .map(res =>res.json())
      .subscribe(messages => {this.messages = messages;this.temp = messages;});
  }
  updateFilter(event,key) {
    let val = event.target.value;
    let temp;
    if(key == 'date') {
       temp = this.temp.filter(function (d) {
        return d.queue_entry_time.date.toLowerCase().indexOf(val) !== -1 || !val;
      });
    }
    else {
       temp = this.temp.filter(function (d) {
        return d[key].toLowerCase().indexOf(val) !== -1 || !val;
      });
    }
    // update the rows
    this.messages = temp;
  }
  name = 'Angular';
 title = 'Submitted Messages';
  }
