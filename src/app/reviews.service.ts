import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Rx";
import {Http,Response} from '@angular/http';
import {IReview} from './comments/review';
import { AngularFireDatabase,FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';

@Injectable()
export class ReviewsService {
  private basePath : string = '/reviews';
  reviews : FirebaseListObservable<IReview[]> = null;
  review : FirebaseObjectObservable<IReview> = null;  
  constructor(private db : AngularFireDatabase) {}

  getReviewList(query={}): FirebaseListObservable<IReview[]> {
    this.reviews = this.db.list(this.basePath, {
      query: query
    });
    return this.reviews
  }

  getReview(key: string): FirebaseObjectObservable<IReview> {
    const itemPath =  `${this.basePath}/${key}`;
    this.review = this.db.object(itemPath)
    return this.review
  }

  createItem(review: IReview): void  {
    this.reviews.push(review)
                //.catch(error => this.handleError(error))
  }
    
    private handleError(error : Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Error in JSON');
    }
  
}
