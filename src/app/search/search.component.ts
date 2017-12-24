import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit {
 // @Input() result:string="";  
 // @Output() clicked=new EventEmitter<string>();
  message : string;
  router : Router;
  constructor(private searchService : SearchService) { }

  getMessage(message : string) {
    this.message=message;
    console.log(message);
    this.searchService.changeMessage(message);

  }

  ngOnInit() {
    this.searchService.currentMessage.subscribe(message => this.message = message);
  }

  

}
