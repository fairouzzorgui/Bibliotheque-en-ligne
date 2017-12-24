import { Component, OnInit,HostListener } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private _service : CartService) { }

  ngOnInit() {
  }

  @HostListener('window:unload') 
  unloadHandler() {
    this._service.deleteAll();
  }

}
