import { Pipe, PipeTransform } from '@angular/core';
import { SearchService } from '../search.service';
import { IBook } from '../bookcard/book';
import { BookService } from '../book.service';
@Pipe({
     name: 'searchPipe'
 })
export class SearchPipe implements PipeTransform {
    message : string;

    constructor(private searchService : SearchService, private bookService : BookService){
        this.searchService.currentMessage.subscribe(message => this.message = message);

    }

transform(data: IBook[], filterBy: string): IBook[] {
        filterBy = this.message;
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        console.log(" search : " + this.message);
        return filterBy ? data.filter((book : IBook) => book.title.toLocaleLowerCase().indexOf(this.message) !== -1 ) : data;
}

}