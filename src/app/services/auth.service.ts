import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FirebaseTSFirestore } from "firebasets/firebasetsfirestore/firebaseTSFirestore";
import { Router } from "@angular/router";

// Firebase services + environment module
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../../environments/environment';
import * as auth from "firebase/auth";

import { Observable, observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";
import { User } from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$!: Observable<any>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router:Router) {
   this.user$ = this.afAuth.authState.pipe(
    switchMap(user => {
      if (user) {
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      }
      else {
        return of(null);
      }
    })
   );
   }

   async googleSignin() {
     const provider = new auth.GoogleAuthProvider();
     const credential = await this.afAuth.signInWithPopup(provider);
     return this.updateUserData();
   }
}


