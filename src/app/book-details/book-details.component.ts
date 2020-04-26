import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import { ActivatedRoute } from '@angular/router';
import {BookService} from '../book.service';
import { MyBooksService} from '../my-books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  authorized = false;
  book: Book;
  isbn = +this.route.snapshot.paramMap.get('isbn');
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private myBooksService: MyBooksService,
  ) { }
  ngOnInit(): void {
    this.getBook();
    const token = localStorage.getItem('token');
    if (token) {
      this.authorized = true;
    }
  }
  getBook(): void {
    this.bookService.getBook(this.isbn)
      .subscribe(book => this.book = book);
  }
  addBook(id: number): void {
    if (!this.authorized) {
      window.alert('Please authorize to use this option!');
    } else {
      this.myBooksService.addBook(id).subscribe();
      window.alert('Book has been added to your collection!!');
    }
  }
}
