import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student-form-component',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './student-form-component.component.html',
  styleUrl: './student-form-component.component.scss'
})
export class StudentFormComponentComponent implements OnInit {

  constructor(private fb: FormBuilder, private _service:StudentService){}

  studentform:any=FormGroup

  ngOnInit(){ 
  // Define the form with default values and validators
   this.studentform = this.fb.group(
    {
      name:['', Validators.required],
      age: ['', Validators.required,],
      course:['', Validators.required],
      joinDate: ['', Validators.required]
    }
   )
  }

  onsubmit(){
    if(this.studentform?.valid){
      this._service.studentvalue.next(this.studentform.value)
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
      this.studentform.reset({
        name:'',
        age:'',
        course:'',
        joinDate:''
      })
     
    }
  }



}
