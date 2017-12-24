import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { filter } from 'rxjs/operators/filter';
import { Router} from '@angular/router';

@Injectable()
export class SearchService {
message : string; 
private messageSource = new BehaviorSubject<string>(null); 
currentMessage = this.messageSource.asObservable();

  constructor(private router : Router) { }

 changeMessage(message : string) {
  this.message = message; 
  this.messageSource.next(message);

  }



}
