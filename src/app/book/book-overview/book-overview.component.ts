import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';

@Component({
  selector: 'app-book-overview',
  templateUrl: './book-overview.component.html',
  styleUrls: ['./book-overview.component.scss']
})
export class BookOverviewComponent implements OnInit {
  books$;

  constructor(private book: BookService) {
  }

  ngOnInit() {
    this.books$ = this.book.findAll();
  }
}
