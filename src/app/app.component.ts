import { Component, HostListener } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import '../../node_modules/jquery/dist/jquery';
import { CartService } from './cart.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [CartService]
})


export class AppComponent  {


  constructor(private _service : CartService){}
  
  @HostListener('window:unload') 
  unloadHandler() {
    this._service.deleteAll();
  }

}