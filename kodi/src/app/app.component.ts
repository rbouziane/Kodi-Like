import { Component } from '@angular/core';
import * as firebase from 'firebase'
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { RouterModule, Routes, RouterOutlet } from '@angular/router'
import { fader } from "./route-animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fader]
})

export class AppComponent {
  constructor() {
    var firebaseConfig = {
        apiKey: "AIzaSyCLRUdDfBX1zFgElZeM_Pf6Zx8k7GBLKes",
        authDomain: "kodi-f66da.firebaseapp.com",
        databaseURL: "https://kodi-f66da.firebaseio.com",
        projectId: "kodi-f66da",
        storageBucket: "kodi-f66da.appspot.com",
        messagingSenderId: "744009940604",
        appId: "1:744009940604:web:3b90e7a11bb20fde9053f9",
        measurementId: "G-K7905DPE8X"
      };
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
