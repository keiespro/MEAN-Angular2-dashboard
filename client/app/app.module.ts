import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule}	from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SidebarModule } from 'ng2-sidebar';
import {DataTableModule} from "angular2-datatable";
//import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import {HeroDetailComponent} from './heroes/hero-detail/hero-detail.component';
import { AppComponent }  from './app.component';
import {HeroesComponent} from './heroes/heroes.component';
import { HeroService} from './heroes/shared/hero.service';
import { DashboardComponent} from './dashboard/dashboard.component';
import {HomeComponent} from './regions/home/home.component';
import {AddRegionComponent} from './regions/home/add-region.component';
import {CustomersComponent} from './regions/customers/customers.component';
import {AddCustomerComponent} from './regions/customers/add-customer.component';
import {NetworksComponent} from './regions/networks/networks.component';
import {AddNetworkComponent} from './regions/networks/add-network.component';
import {ProfilesComponent} from './regions/tariffprofiles/profiles.component';
import {AddProfileComponent} from './regions/tariffprofiles/add-profile.component';
import {ContractsComponent} from './regions/contracts/contracts.component';
import {AddContractComponent} from './regions/contracts/add-contract.component';
import {RegionService} from './regions/shared/region.service';

//for the site
import {DashService} from './dashboard/dashboard.service';


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
  HeroDetailComponent,
  HeroesComponent,
  DashboardComponent,
  HomeComponent,
  AddRegionComponent,
    CustomersComponent,
    AddCustomerComponent,
    NetworksComponent,
    AddNetworkComponent,
    ProfilesComponent,
    AddProfileComponent,
    ContractsComponent,
    AddContractComponent,
   ],
   providers:[
   HeroService,
   DashService,
   RegionService,

   ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
