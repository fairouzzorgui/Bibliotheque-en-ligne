import { forEach,sum} from 'lodash';
import { Component, OnInit } from '@angular/core';
import {BookService} from '../book.service';
import { IBook } from '../bookcard/book';
import { AuthService } from '../auth.service';
import { CartService } from '../cart.service';
import { Cart } from './cart';
import { FirebaseListObservable,FirebaseObjectObservable} from 'angularfire2/database-deprecated';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers : [AuthService,CartService]
})
export class CartComponent implements OnInit {
  items : FirebaseListObservable<Cart[]>;
  itemlist : Cart[];  
  itemo : FirebaseObjectObservable<Cart>;
  subtotal : number;
  total : number = 0;

  constructor(private _service: CartService, private authService : AuthService) {}

  ngOnInit() {
    this.items = this._service.getItemsList({});
  }

  getsubtotal(item : Cart) : number {
    this.subtotal = item.price;
    return this.subtotal;
  }

  gettotal() : number {
    let val = 0;
    let tot : any[];
    this.items.subscribe(item => this.itemlist = item );
    this.itemlist.forEach( value => {tot.push(value.price);});
    this.total = sum(tot);
    return this.total;
  }
  

  delete(item : Cart) {
    this._service.deleteItem(item.$key);

  }

    
}
