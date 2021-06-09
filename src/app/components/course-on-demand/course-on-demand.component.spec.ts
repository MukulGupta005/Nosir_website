import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseOnDemandComponent } from './course-on-demand.component';

describe('CourseOnDemandComponent', () => {
  let component: CourseOnDemandComponent;
  let fixture: ComponentFixture<CourseOnDemandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseOnDemandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseOnDemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
