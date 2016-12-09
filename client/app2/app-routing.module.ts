    import { NgModule }             from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
    import { DashboardComponent }   from './dashboard/dashboard.component';
    import { DetailServiceTemplateComponent }   from './dashboard/detail-servicetemplate.component';
    import { EditServiceTemplateComponent }   from './dashboard/edit-servicetemplate.component';
    import { AddServiceTemplateComponent }   from './dashboard/add-servicetemplate.component';
    import { SubmittedComponent} from './messagequeue/submitted.component';
    import { QueuedComponent} from './messagequeue/queued.component';



    const routes: Routes = [
      { path: 'customer_admin\.html', redirectTo: '/ct/dashboard', pathMatch: 'full' },
      { path: 'ct', redirectTo: '/ct/dashboard', pathMatch: 'full' },
      { path: 'ct/dashboard',  component: DashboardComponent },
      { path: 'ct/detailservicetemplate/:id', component:DetailServiceTemplateComponent},
      { path: 'ct/editservicetemplate/:id', component:EditServiceTemplateComponent},
      { path: 'ct/addservicetemplate', component:AddServiceTemplateComponent},
      { path: 'ct/submitted', component:SubmittedComponent},
      { path: 'ct/queued', component:QueuedComponent},
      { path: 'ct/messages', redirectTo: '/ct/submitted', pathMatch: 'full' },

    ];
    @NgModule({
      imports: [ RouterModule.forRoot(routes) ],
      exports: [ RouterModule ]
    })
    export class AppRoutingModule {}
