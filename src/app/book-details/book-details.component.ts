import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import { ActivatedRoute } from '@angular/router';
import {BookService} from '../book.service';
import { Location } from '@angular/common';
import { MybooksService} from '../mybooks.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  selected: Book;
  isbn = +this.route.snapshot.paramMap.get('isbn');
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private mybooksService: MybooksService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getBook();
  }

  getBook(): void {
    this.bookService.getBooks()
      .subscribe(data => {
        this.selected = data.find(book => (book.isbn === this.isbn));
      });
  }
  addBook(book: Book): void {
    this.mybooksService.addBook(book);
  }
}
