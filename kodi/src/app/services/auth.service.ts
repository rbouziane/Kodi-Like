import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { auth } from  'firebase/app';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) { }

  async sendPasswordResetEmail(passwordResetEmail: string) {
   return await firebase.auth().sendPasswordResetEmail(passwordResetEmail);
  }

  createNewUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        )
      }
    )
  }

async  loginWithGoogle(){
    await  firebase.auth().signInWithPopup(new auth.GoogleAuthProvider())
}

  signInUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        )

      }
    )
  }

  signOutUser() {
    firebase.auth().signOut();
  }

}
