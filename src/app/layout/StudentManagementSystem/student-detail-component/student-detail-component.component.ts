import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-student-detail-component',
  standalone: true,
  imports: [DatePipe,CommonModule],
  templateUrl: './student-detail-component.component.html',
  styleUrl: './student-detail-component.component.scss'
})
export class StudentDetailComponentComponent implements OnInit {
  constructor(private _service:StudentService){
    console.log('StudentDetailComponent constructor called');
  }
  data:any[]=[];
  student:any
  
  ngOnInit(){
    console.log('StudentDetailComponent ngOnInit called');
    console.log('Current student value:', this.student);
    
    this._service.dataView.subscribe(e => {
      console.log("data particular received:", e);
      if (e) { // Only update if we have valid data
        this.student = e;
        this.data.push(e);
        console.log("student property updated:", this.student);
        console.log("data array:", this.data);
      }
    });
  }
}
