import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase  from 'firebase/app';

@Component({
  selector: 'app-logintest1',
  templateUrl: './logintest1.page.html',
  styleUrls: ['./logintest1.page.scss'],
})
export class Logintest1Page implements OnInit {
  items: Observable<any[]>;
  constructor(afDB: AngularFireDatabase, private afAuth: AngularFireAuth) {
  this.items = afDB.list('cuisines').valueChanges();
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
