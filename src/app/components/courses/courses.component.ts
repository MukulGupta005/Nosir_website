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
        "img" : "assets/images/english.jpeg",
        "courseName" : "English for class 10th",
        "instructor" : "Koushal Dubey",
        "prize" : 699,
         "profile" : "assets/images/kid.jpg"
      },
      {
        "id" : 1,
        "img" : "assets/images/guitar.jpeg",
        "courseName" : "Learn guitar",
        "instructor" : "Krishan Kumar",
        "prize" : 799,
        "profile" : "assets/images/kid.jpg"
      },
      {
        "id" : 1,
        "img" : "assets/images/python.png",
        "courseName" : "Python",
        "instructor" : "Sagar Mehta",
        "prize" : 499,
        "profile" : "assets/images/kid.jpg"
      },
      {
        "id" : 1,
        "img" : "assets/images/algods.png",
        "courseName" : "Data structure and algorithms",
        "instructor" : "Aadarsh Gupta",
        "prize" : 599,
        "profile" : "assets/images/kid.jpg"
      },
      {
        "id" : 1,
        "img" : "assets/images/maths.jpeg",
        "courseName" : "Maths for class 10th",
        "instructor" : "Mukut Sharma",
        "prize" : 499,
        "profile" : "assets/images/kid.jpg"
      },
      {
        "id" : 1,
        "img" : "assets/images/history.jpeg",
        "courseName" : "History for class 10th",
        "instructor" : "Tappasum",
        "prize" : 399,
        "profile" : "assets/images/kid.jpg"
      }
];

  createCourses() {
    this.coursesService.createCourse({
      "id" : 1,
      "img" : "assets/images/course1.jpeg",
      "courseName" : "Maths for class 10th",
      "instructor" : "Nisha Poswal",
      "price" : 499,
      "profile" : "assets/images/kid.jpg"
    }).then(res => {
      console.log('create course res comp - '+ JSON.stringify(res));
    });
  }

  getCourses = () =>
      this.coursesService
      .getCourses()
      .subscribe(res =>(console.log('get courses res comp - ' + JSON.stringify(res))));
  

  updateDoc = {
    payload: {
      doc: {
        id: "G7zxeJbap5ZNJwPq2imA"
      }
    }
  }

  deleteDoc = {
    payload: {
      doc: {
        id: "GNUR2hJ5v76exmicVE8h"
      }
    }
  }


  updateCourse(data: any) { 
    this.coursesService.updateCourse(data)
  }

  deleteCourse(data: any) {
     this.coursesService.deleteCourse(data);
  }


  // cards = this.getCourses(); --> take values 

  ngOnInit(): void {
    this.createCourses(); //just for testing
    this.getCourses();
    this.updateCourse(this.updateDoc);
    this.deleteCourse(this.deleteDoc);
  }

  // getcourses() {
  //   this.coursesService.getCourses().subscribe(
  //     (res: any) => {
  //       this.cards = res.courses;
  //       console.log(res);
  //     },
  //     (err: any) => {}
  //   );
  // }




}
