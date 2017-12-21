import { Injectable} from '@angular/core';
import {Observable} from "rxjs/Rx";
import {Http,Response} from '@angular/http';
import { IBook } from './bookcard/book';
import { AngularFireDatabase,FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';


@Injectable()
export class BookService {
    private basePath : string = '/books';
    books : FirebaseListObservable<IBook[]> = null;
    book : FirebaseObjectObservable<IBook> = null;  

    constructor(private db : AngularFireDatabase) {}

    getBookList(query={}): FirebaseListObservable<IBook[]> {
        this.books = this.db.list(this.basePath, {
          query: query
        });
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

    // code qui prend les données d'un livre et en fait un objet pour créer bookcard ca contient 
    // prix rating, book name and author name and comments + toujours bouton add to cart and link to book details.
    // not sure about book details ( separated class or same ? if same i guess it's easier we just take what we
    // need by interpolating it in the HTML
    // and anyway where should i put the book details ?
    // in that case i think i should make this service common : takes the entire object, then in html i just
    // put what i need
    // books are multiplied through it 
}

