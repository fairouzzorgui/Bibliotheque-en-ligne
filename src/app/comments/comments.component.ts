import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../reviews.service';
import {IReview} from './review';
import { ActivatedRoute } from '@angular/router';
import {FirebaseListObservable} from 'angularfire2/database-deprecated';
import { AuthService } from '../auth.service';
import { async } from 'q';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers : [ReviewsService,AuthService]
})
export class CommentsComponent implements OnInit {
  reviews : FirebaseListObservable<IReview[]>;
  pageTitle : string = "comments"
  title : string;
  review : IReview = new IReview();
  email : string;
  constructor(private _service : ReviewsService, private _route : ActivatedRoute, private authService : AuthService) { 
     
  }

  ngOnInit() : void {
   //this._service.getReviews().subscribe(reviews => this.reviews = reviews);
   this.reviews = this._service.getReviewList({});
   let id = +this._route.snapshot.params['title'];
   this.title = this._route.snapshot.params['title'];
   this.pageTitle += `: ${id}`;
   console.log(this.title);
   console.log(this.email);
   this.authService.getcurrentUserName();  
  }
   
  condition(item : any) : boolean {
     return(item.title == this.title);
  }

  getValue() {
  this.review.title = this.title;
  this.review.avatar = "https://conferencecloud-assets.s3.amazonaws.com/default_avatar.png";
  if (this.authService.getcurrentUserName() == null ) {this.review.user = "Anonymous";}  
  else {this.review.user = this.authService.getcurrentUserName()}
  this.review.date = new Date().toString();
  this._service.createItem(this.review);
  this.review = new IReview();    
  }

}
