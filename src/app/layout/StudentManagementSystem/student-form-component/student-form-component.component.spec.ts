import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFormComponentComponent } from './student-form-component.component';

describe('StudentFormComponentComponent', () => {
  let component: StudentFormComponentComponent;
  let fixture: ComponentFixture<StudentFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentFormComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
