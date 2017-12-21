import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  username : string;

  constructor(private firebaseAuth: AngularFireAuth, private router : Router) {
    this.user = firebaseAuth.authState;
    console.log("mail is " + this.user['email']);
  }

  getcurrentUserName() : string {
    this.firebaseAuth.authState.subscribe(auth => this.username = auth.email);
      return this.username;
      }
  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        this.router.navigate(['/']);
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });    
  }

  login(email: string, password: string,result : boolean) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        this.router.navigate(['/']);  
        result = false;      
        console.log('Nice, it worked!');
      })
      .catch(err => {
        result = true;
        console.log('Something went wrong:',err.message);
      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }

}