import { BrowserModule } from '@angular/platform-browser';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgModule } from '@angular/core';
import '../../node_modules/jquery/dist/jquery';
import { AppComponent } from './app.component';
import { BookcardComponent } from './bookcard/bookcard.component';
import { BookService } from './book.service';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RightbarComponent } from './rightbar/rightbar.component'
import { HttpModule } from '@angular/http';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { RouterModule} from '@angular/router';
import {ReviewsService } from './reviews.service';
import {FormsModule} from '@angular/forms';
import { NofoundComponent } from './nofound/nofound.component';
import { CommentsComponent } from './comments/comments.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { ErrorHandler } from '@angular/core/src/error_handler';
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CheckoutComponent } from './checkout/checkout.component';


export const firebaseConfig = {
  apiKey: "AIzaSyBqKqrrH_OMP53crK5ru61Ng8xfywpx9QE",
  authDomain: "bibliotheque-en-ligne.firebaseapp.com",
  databaseURL: "https://bibliotheque-en-ligne.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "968559602959"
};

@NgModule({
  declarations: [
    AppComponent,
    BookcardComponent,
    SearchComponent,
    NavbarComponent,
    RightbarComponent,
    AboutComponent,
    ProfileComponent,
    CartComponent,
    NofoundComponent,
    CommentsComponent,
    LoginComponent,
    RegisterComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule, AngularFontAwesomeModule,HttpModule,FormsModule,AngularFireAuthModule,AngularFireDatabaseModule,AngularFireModule.initializeApp(firebaseConfig), 
    RouterModule.forRoot([
      {path : "home", component : BookcardComponent },
      {path : "about", component : AboutComponent },
      {path : "login", component : LoginComponent },
      {path : "checkout", component : CheckoutComponent},      
      {path : "register", component : RegisterComponent },
      {path : "comments/:title", component : CommentsComponent},
      {path : "cart", component : CartComponent },
      {path : "profile", component : ProfileComponent },
      {path : "", component : BookcardComponent },
      {path : "**", component : NofoundComponent }      
      
    ])
  ],
  providers: [
    BookService, ReviewsService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }