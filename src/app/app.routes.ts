import { Routes } from '@angular/router';
import { StudentDetailComponentComponent } from './layout/StudentManagementSystem/student-detail-component/student-detail-component.component';
import { StudentFormComponentComponent } from './layout/StudentManagementSystem/student-form-component/student-form-component.component';
import { StudentListComponentComponent } from './layout/StudentManagementSystem/student-list-component/student-list-component.component';

export const routes: Routes = [
  { path: 'StdDetails', component: StudentDetailComponentComponent },
  { path: 'StdFrom', component: StudentFormComponentComponent },
  { path: 'StdList', component: StudentListComponentComponent },
  // other routes
];
