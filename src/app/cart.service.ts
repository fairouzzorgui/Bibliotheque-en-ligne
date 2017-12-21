import { Injectable } from '@angular/core';
import { AngularFireDatabase,FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Cart } from './cart/cart';

@Injectable()
export class CartService {
  private basePath : string = '/cart';
  items : FirebaseListObservable<Cart[]> = null;
  item : FirebaseObjectObservable<Cart> = null;  
  
  constructor(private db : AngularFireDatabase) {}
  getItemsList(query={}): FirebaseListObservable<Cart[]> {
    this.items = this.db.list(this.basePath, {
      query: query
    });
    return this.items
  }

  getItem(key: string): FirebaseObjectObservable<Cart> {
    const itemPath =  `${this.basePath}/${key}`;
    this.item = this.db.object(itemPath)
    return this.item
  }

  createItem(item: Cart): void  {
    this.items.push(item)
                //.catch(error => this.handleError(error))
  }

  // Deletes a single item
  deleteItem(key: string): void {
      this.items.remove(key)
        .catch(error => this.handleError(error))
  }
  // Deletes the entire list of items
  deleteAll(): void {
      this.items.remove()
        .catch(error => this.handleError(error))
  }

  private handleError(error : Response) {
    console.error(error);
    }

}
