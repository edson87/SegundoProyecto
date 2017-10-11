import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AppRoutingComponent } from './app-routing/app-routing.component';
import { routingComponents } from './app-routing/app-routing.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { ModuleComponent } from './module/module.component';


import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { Ng2CompleterModule } from "ng2-completer";
//import { CustomModal } from './custom-modal-sample';
//import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
//import { DepartmentListComponent } from './department-list/department-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    routingComponents,
    DepartmentDetailComponent,
    ModuleComponent
    //EmployeeDetailComponent,
    //DepartmentListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingComponent,
    ModalModule.forRoot(),
    BootstrapModalModule,
    Ng2CompleterModule,
    //RouterModule.forRoot([
    //  {path: 'departments', component: DepartmentListComponent},
    //  {path: 'employees', component: EmployeeDetailComponent}
    //])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
