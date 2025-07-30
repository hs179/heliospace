import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDetailComponentComponent } from './student-detail-component.component';

describe('StudentDetailComponentComponent', () => {
  let component: StudentDetailComponentComponent;
  let fixture: ComponentFixture<StudentDetailComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentDetailComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
