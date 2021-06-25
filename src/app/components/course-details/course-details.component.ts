import { Component, OnInit,Input } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  @Input() cardData: any;
  coursedetails: any;
  course: any;
  constructor(private commonService: CommonService,
    private coursesService: CoursesService) { }

  ngOnInit(): void {
    
  }
  details(course:any){
    this.commonService.setSelectedCourse(this.course);
  }
}
