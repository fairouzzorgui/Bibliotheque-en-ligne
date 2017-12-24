import { Injectable} from '@angular/core';
import {Observable} from "rxjs/Rx";
import {Http,Response} from '@angular/http';
import { IBook } from './bookcard/book';
import { AngularFireDatabase,FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { SearchService } from './search.service';


@Injectable()
export class BookService {
    private basePath : string = '/books';
    books : FirebaseListObservable<IBook[]> = null;
    book : FirebaseObjectObservable<IBook> = null;  

    constructor(private db : AngularFireDatabase) {}

    getBookList(query): FirebaseListObservable<IBook[]> {
        this.books = this.db.list(this.basePath, {
          query: {query}
                });
        console.log("called")
        return this.books
      }

    
  getBook(key: string): FirebaseObjectObservable<IBook> {
    const itemPath =  `${this.basePath}/${key}`;
    this.book = this.db.object(itemPath)
    return this.book
  }  
    
    private handleError(error : Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Error in JSON');
    }

}

