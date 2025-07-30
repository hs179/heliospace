import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService  {
  studentvalue = new Subject<any>();
  dataView = new BehaviorSubject<any>(null);
  database:any[]=[];
  

  constructor() {
    this.studentvalue.subscribe((data) => {
      this.database.push(data);
      console.log('Database:', this.database); // Correct: logs the array
    });
   }
}
