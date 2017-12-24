import { Component, OnInit,HostListener } from '@angular/core';
import { BookService } from '../book.service';
import { IBook } from './book';
import {Cart} from '../cart/cart';
import { FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { CartService } from '../cart.service';
import { SearchService } from '../search.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-bookcard',
  templateUrl: './bookcard.component.html',
  styleUrls: ['./bookcard.component.css'],
  providers : [BookService,CartService,SearchService]
})
export class BookcardComponent implements OnInit {
  items : FirebaseListObservable<Cart[]>;  
  books : FirebaseListObservable<IBook[]>;
  booko : FirebaseObjectObservable<IBook>;
  book : IBook = new IBook();
  item : Cart = new Cart();
  message : string;
  constructor(private _service: BookService, private cartService : CartService, private searchService:SearchService,private _route:ActivatedRoute) {      
  }

  ngOnInit() : void {
  this.searchService.currentMessage.subscribe(message => this.message = message);
    

    this.books = this._service.getBookList({
      orderByChild : 'title',
      equalTo : this.message
    });
    this.items = this.cartService.getItemsList({});    
  }




  addtoCart(i : number)  {
    console.log("i equals :" + i);
    this.booko =  this._service.getBook((i+1).toString());
    this.booko.subscribe(b => this.book = b );
    console.log("book : " + this.book.title);
    this.item.cover = this.book.cover;
    this.item.id = this.book.id;
    this.item.price = this.book.price;
    this.item.quantity = 1;
    this.item.title = this.book.title;
    console.log("item" + this.item.title);
    this.cartService.createItem(this.item);
    this.item = new Cart();
  }

  @HostListener('window:unload') 
  unloadHandler() {
    this.cartService.deleteAll();
  }

}
