import { Component, OnInit } from '@angular/core';

//import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase  from 'firebase/app';

export interface Item { name: string; }

@Component({
  selector: 'app-logintest1',
  templateUrl: './logintest1.page.html',
  styleUrls: ['./logintest1.page.scss'],
})
export class Logintest1Page implements OnInit {
    private itemsCollection: AngularFirestoreCollection<Item>;
    items: Observable<Item[]>;
  //items: Observable<any[]>;
  //constructor(afDB: AngularFireDatabase, private afAuth: AngularFireAuth) {
  //this.items = afDB.list('cuisines').valueChanges();
  //}
    constructor(afDB: AngularFirestore, private afAuth: AngularFireAuth) {
    //this.items = afDB.list('cuisines').valueChanges();
        this.itemsCollection = afDB.collection<Item>('cuisines');
        this.items = this.itemsCollection.valueChanges();
    }
    
    signInWithFacebook() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => console.log(res));
  }

  signOut() {
    this.afAuth.auth.signOut();
  }
    
  ngOnInit() {
  }

}
