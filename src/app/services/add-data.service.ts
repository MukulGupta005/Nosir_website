import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
// import * as firebase from "firebase";

@Injectable({
  providedIn: "root",
})
export class AddDataService {
  constructor(private firestore: AngularFirestore) {}

  addDemo(payload) {
    this.firestore
      .collection("demos")
      .add(payload)
      .then((res) => {
        // console.log(res);
        // console.log("success , DEmo added ");
      })
      .catch((e) => {
        // console.log(e);
      });
  }
}
