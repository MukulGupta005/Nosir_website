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
        "courseName" : "I will teach you english",
        "instructor" : "Saucha Hemmings",
        "prize" : 899,
         "profile" : "assets/images/dVwwrn9MJsrHbdv5D5Zr.png"
      },
      {
        "id" : 1,
        "img" : "assets/images/piano.jpg",
        "courseName" : "Piano from Trinity Teacher",
        "instructor" : "Devashish Sharma",
        "prize" : 1199,
        "profile" : "assets/images/ai6UqMVgHfOUQ84hIgBC.png"
      },
      {
        "id" : 1,
        "img" : "assets/images/webd.png",
        "courseName" : "Web Development",
        "instructor" : "Ricardol. Arbois Jr",
        "prize" : 1399,
        "profile" : "assets/images/BQcjLcItkeNMIppyYnNa.png"
      },
      {
        "id" : 1,
        "img" : "assets/images/c++.jpeg",
        "courseName" : "I will teach you C++",
        "instructor" : "Alkesh Kaba",
        "prize" : 599,
        "profile" : "assets/images/qaJvsFFsEUx6mpcPiqrO.png"
      },
      {
        "id" : 1,
        "img" : "assets/images/python.jpeg",
        "courseName" : "Python from IT expert",
        "instructor" : "Krishnarao S V V",
        "prize" : 999,
        "profile" : "assets/images/ylI6ENs4BGaccDFZqCMw.png"
      },
      {
        "id" : 1,
        "img" : "assets/images/japanese.jpeg",
        "courseName" : "I will teach you Japanese",
        "instructor" : "Princess V. Haak",
        "prize" : 699,
        "profile" : "assets/images/ubrCjzZFdsf7yvPvB8jE.png"
      },
      {
        "id" : 1,
        "img" : "assets/images/biology.png",
        "courseName" : "Biology for Class 10th",
        "instructor" : "kiran lalani",
        "prize" : 1899,
        "profile" : "assets/images/IJDYrNTKUVQIiFm8S3LZ.png"
      },
      {
        "id" : 1,
        "img" : "assets/images/urdu.jpeg",
        "courseName" : "I will teach you Urdu",
        "instructor" : "Iniaz Ai",
        "prize" : 699,
        "profile" : "assets/images/QRfDIZ3Wy6XqEfEiNq7W.png"
      },
      {
        "id" : 1,
        "img" : "assets/images/autocad.png",
        "courseName" : "I will teach you AutoCad",
        "instructor" : "Neha Anil",
        "prize" : 699,
        "profile" : "assets/images/YYtI5wBDwAZEA1idrjFO.png"
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
    // this.createCourses(); //just for testing
    // this.getCourses();
    // this.updateCourse(this.updateDoc);
    // this.deleteCourse(this.deleteDoc);
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
