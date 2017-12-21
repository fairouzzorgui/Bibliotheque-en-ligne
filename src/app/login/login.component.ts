import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {AngularFireAuth,AngularFireAuthProvider } from 'angularfire2/auth' ;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService]
})
export class LoginComponent implements OnInit {
  invalidLogin : boolean = false;;
  email : string;
  password : string;

  constructor(private router : Router, private authService : AuthService) { }

  ngOnInit() {
  }

  /*signIn(credentials) {
    this.authService.login(credentials).subscribe(result => {
      if (result)
      this.router.navigate(['/']);
      else
      this.invalidLogin =true;
    })
  }*/
  login() {
   this.authService.login(this.email, this.password,this.invalidLogin); 
    this.email = this.password = '';    
  }

  
}

