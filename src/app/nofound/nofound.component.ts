import { Component, OnInit,HostListener } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-nofound',
  templateUrl: './nofound.component.html',
  styleUrls: ['./nofound.component.css'],
  providers : [CartService]
})
export class NofoundComponent implements OnInit {

  constructor(private _service : CartService) { }

  ngOnInit() {
  }
  @HostListener('window:unload') 
  unloadHandler() {
    this._service.deleteAll();
  }
}
