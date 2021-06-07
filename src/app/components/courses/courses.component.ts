import { Component, OnInit } from "@angular/core";
import { CoursesService } from "src/app/services/courses.service";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.scss"],
})
export class CoursesComponent implements OnInit {
  constructor(private coursesService: CoursesService) {}
  cards =  [
    {
        "id" : 1,
        "img" : "assets/images/course1.jpeg",
        "courseName" : "English for class 10th",
        "instructor" : "Nisha Poswal",
        "prize" : 499
      },
      {
        "id" : 1,
        "img" : "assets/images/course1.jpeg",
        "courseName" : "Learn guitar",
        "instructor" : "Nisha Poswal",
        "prize" : 499
      },
      {
        "id" : 1,
        "img" : "assets/images/course1.jpeg",
        "courseName" : "Python",
        "instructor" : "Nisha Poswal",
        "prize" : 499
      },
      {
        "id" : 1,
        "img" : "assets/images/course1.jpeg",
        "courseName" : "Data structure and algorithms",
        "instructor" : "Nisha Poswal",
        "prize" : 499
      },
      {
        "id" : 1,
        "img" : "assets/images/course1.jpeg",
        "courseName" : "Maths for class 10th",
        "instructor" : "Nisha Poswal",
        "prize" : 499
      },
      {
        "id" : 1,
        "img" : "assets/images/course1.jpeg",
        "courseName" : "History for class 10th",
        "instructor" : "Nisha Poswal",
        "prize" : 499
      }
];

  ngOnInit(): void {

  }

  getcourses() {
    this.coursesService.getCourses().subscribe(
      (res) => {
        this.cards = res.courses;
        console.log(res);
      },
      (err) => {}
    );
  }
}
