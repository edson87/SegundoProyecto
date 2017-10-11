import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router'
@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId;
  constructor(private ActiveRoute: ActivatedRoute, private router: Router) { }

 /* ngOnInit() {
    let id = this.ActiveRoute.snapshot.params['id'];
    this.departmentId = id;
  }*/
  ngOnInit(){
    this.ActiveRoute.params.subscribe((params: Params)=>{
            let id = parseInt(params['id']);
            this.departmentId = id;
       })
  }

  back(){
    this.router.navigate(['/departaments'])
  }

  goPrevious(){
    let previousId = this.departmentId - 1;
     this.router.navigate(['/departaments',previousId])
  }
  goNext(){
    let nextId = this.departmentId + 1;
     this.router.navigate(['/departaments',nextId])
  }
}
