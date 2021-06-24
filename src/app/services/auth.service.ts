import { Injectable } from "@angular/core";
import { rejects } from "assert";
import * as firebase from "firebase";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  currentUser;
  isLoggedIn = new Subject<boolean>();
  constructor() {}

  signInwithGoogle() {
    var provider = new firebase.default.auth.GoogleAuthProvider();
    firebase.default
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential["accessToken"];
        // The signed-in user info.
        var user = result.user;
        // ...
        this.fetchCurrentSignedInUser();
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  }

  fetchCurrentSignedInUser() {
    firebase.default.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setCurrentUser(user);
        this.isLoggedIn.next(true);
        console.log("Singed In");
      } else {
        console.log("Not signed In");
      }
    });
  }

  setCurrentUser(user) {
    this.currentUser = user;
  }

  getCurrentUser() {
    return this.currentUser;
  }
}
