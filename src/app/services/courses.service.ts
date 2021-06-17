import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  // constructor(private resService : RestService) { }
  constructor(private firestore: AngularFirestore) {}

//  getCourses(){
//    return this.resService.get("src/assets/config/cards.json");
//  }
// }


  createCourse(data: any) {
    return new Promise<any>((resolve, reject) =>{
        this.firestore
            .collection("courses")
            .add(data)
            .then(res => {
              resolve(res);
              console.log('create course res '+ JSON.stringify(res));
            }, err => {
              reject(err);
              console.error('create course error '+ err);
            }
          );
    });
  }

  getCourses() { 
    return this.firestore.collection("courses").snapshotChanges(); //(can use get as well instaed of snapshot changes)
  }

  updateCourse(data :any) {
    return this.firestore
        .collection("courses")
        .doc(data.payload.doc.id)
        .set({ updated: true }, { merge: true });
  }

  deleteCourse(data: any) {
    return this.firestore
        .collection("courses")
        .doc(data.payload.doc.id)
        .delete();
  }
}