import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {MyBooksService} from '../my-books.service';


@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit {
  authorized = false;
  selected: Book;
  books: Book[];
  constructor(
    private myBooksService: MyBooksService,
  ) { }
  ngOnInit(): void {
    this.getBooks();
    const token = localStorage.getItem('token');
    if (token) {
      this.authorized = true;
    }
  }
  getBooks(): void {
    this.myBooksService.getMyBooks()
      .subscribe(books => (this.books = books.books));
  }
  onSelect(book: Book) {
    this.selected = book;
  }

  deleteBook(id: number) {
    this.myBooksService.deleteBook(id).subscribe();
  }
}
