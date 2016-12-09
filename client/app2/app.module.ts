import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule}	from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SidebarModule } from 'ng2-sidebar';
import {DataTableModule} from "angular2-datatable";
//import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent }  from './app.component';
import { DashboardComponent} from './dashboard/dashboard.component';

import { DetailServiceTemplateComponent }   from './dashboard/detail-servicetemplate.component';
import { EditServiceTemplateComponent }   from './dashboard/edit-servicetemplate.component';
import {AddServiceTemplateComponent }   from './dashboard/add-servicetemplate.component';
import { SubmittedComponent} from './messagequeue/submitted.component';
import { QueuedComponent} from './messagequeue/queued.component';
//for the site


import {AppRoutingModule} from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


@NgModule({
  imports:      [ BrowserModule,
  FormsModule,
  InMemoryWebApiModule.forRoot(InMemoryDataService),
  AppRoutingModule,
  HttpModule,
  NgbModule.forRoot(),
  SidebarModule,
  DataTableModule,
//  AlertModule
   ],
  declarations: [ AppComponent,
  DashboardComponent,
    DetailServiceTemplateComponent,
    EditServiceTemplateComponent,
    AddServiceTemplateComponent,
    SubmittedComponent,
    QueuedComponent
   ],
   providers:[
   ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
