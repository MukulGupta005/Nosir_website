import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandCourseComponent } from './demand-course.component';

describe('DemandCourseComponent', () => {
  let component: DemandCourseComponent;
  let fixture: ComponentFixture<DemandCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
