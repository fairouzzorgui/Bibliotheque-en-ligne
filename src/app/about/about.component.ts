import { Component, OnInit,HostListener } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers : [CartService]
})
export class AboutComponent implements OnInit {

  constructor(private _service : CartService) { }

  ngOnInit() {
  }
  @HostListener('window:unload') 
  unloadHandler() {
    this._service.deleteAll();
  }
}
