import { Component, NgModule  } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';
import { DepartmentListComponent } from '../department-list/department-list.component';
import { DepartmentDetailComponent } from '../department-detail/department-detail.component'
const routes: Routes = [
            {path:'departaments', component: DepartmentListComponent },
            {path: 'employees', component: EmployeeDetailComponent },
            {path: 'departments/:id', component: DepartmentDetailComponent}
            ];
           
@Component({
  selector: 'app-app-routing',
  templateUrl: './app-routing.component.html',
  styleUrls: ['./app-routing.component.css']
})


@NgModule({
  imports:[ RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingComponent  {}
export const routingComponents= [EmployeeDetailComponent,DepartmentListComponent,DepartmentDetailComponent ]