import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list-component.component.html',
  styleUrl: './student-list-component.component.scss'
})
export class StudentListComponentComponent implements OnInit {

  constructor( private _service: StudentService, private _router:Router){}
  students:any
  ngOnInit(){
  const resp = JSON.parse(JSON.stringify(this._service.database))
  this.students = resp;
   
  }
 
  viewStudent(student:any){
   this._service.dataView.next(student);
   this._router.navigate(['/StdDetails'])
  }

}
