    import { NgModule }             from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
    import { DashboardComponent }   from './dashboard/dashboard.component';
    import { HeroesComponent }      from './heroes/heroes.component';
    import { HeroDetailComponent }  from './heroes/hero-detail/hero-detail.component';

    import { HomeComponent} from './regions/home/home.component';
    import { CustomersComponent} from './regions/customers/customers.component';
    import { AddRegionComponent} from './regions/home/add-region.component';
    import { AddCustomerComponent} from './regions/customers/add-customer.component';
    import {NetworksComponent} from './regions/networks/networks.component';
    import {AddNetworkComponent} from './regions/networks/add-network.component';
    import {ProfilesComponent} from './regions/tariffprofiles/profiles.component';
    import {AddProfileComponent} from './regions/tariffprofiles/add-profile.component';
    import {ContractsComponent} from './regions/contracts/contracts.component';
    import {AddContractComponent} from './regions/contracts/add-contract.component';

    const routes: Routes = [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard',  component: DashboardComponent },
      { path: 'regions_home',  component: HomeComponent },
      { path: 'addregion',  component: AddRegionComponent },
      { path: 'regions_customers',  component: CustomersComponent },
      { path: 'addcustomer',  component: AddCustomerComponent },
      { path: 'editregion/:id', component: AddRegionComponent},
      { path: 'detail/:id', component: HeroDetailComponent },
      { path: 'editcustomer/:id', component: AddCustomerComponent},
      { path: 'heroes',     component: HeroesComponent },
      { path: 'regions_network', component: NetworksComponent},
      { path: 'addnetwork', component:AddNetworkComponent},
      { path: 'editnetwork/:id', component:AddNetworkComponent},
      { path: 'regions_tariff', component: ProfilesComponent},
      { path: 'addprofile', component:AddProfileComponent},
      { path: 'editprofile/:id', component:AddProfileComponent},
      { path: 'regions_contracts', component: ContractsComponent},
      { path: 'addcontract', component:AddContractComponent},
      { path: 'editcontract/:id', component:AddContractComponent}

    ];
    @NgModule({
      imports: [ RouterModule.forRoot(routes) ],
      exports: [ RouterModule ]
    })
    export class AppRoutingModule {}
