import { Component } from '@angular/core';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'MARType';

  private firestore!: FirebaseTSFirestore;
  dataRef!:USER;

  constructor() {
    // this.firestore = new FirebaseTSFirestore();
    // this.firestore.create({
    //   path: ['USERS_COLLECTION',"6"],
    //   data: {
    //     name:'martin',
    //     age:20,
    //     quote:'meow mix meow mix please deliever'
    //   },
    //   onComplete: (docId) => {
    //     // alert('Created document' + docId);
    //   },
    //   onFail: (err) => {
    //     alert('Failed to create Document');
    //   },
    // });


    // this.firestore = new FirebaseTSFirestore();
    // this.firestore.getDocument({
    //   path: ['USERS_COLLECTION','6'],
    //   onComplete: (result) => {
    //     this.dataRef = <USER>result.data();
    //     console.log(this.dataRef.quote);
    //     alert(this.dataRef.name + ' ' + this.dataRef.age + ' '+this.dataRef.quote);
        
    //   },
    //   onFail: (err) => {},
    // });
    // this.firestore.listenToDocument(
    //   {
    //     name:"USER_LISTENER",
    //     path: ["USER_COLLECTION","5"],
    //     onUpdate: (result) => {
    //       this.dataRef = <USER>result.data();
    //       alert(this.dataRef.name + ' ' + this.dataRef.age + ' '+this.dataRef.quotes);
    //     }
    //   }
    // );
  }
}

export interface USER {
  name: string;
  age: number;
  quote: string;
}
