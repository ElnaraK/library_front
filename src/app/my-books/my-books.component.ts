import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {Book} from '../book';
import {MybooksService} from '../mybooks.service';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit {
  authorized = true;
  selected: Book;
  user: User;
  books: Book[];
  constructor(
    private mybooksService: MybooksService,
  ) { }
  ngOnInit(): void {
    this.getBooks();
  }
  getBooks(): void {
    this.mybooksService.getMyBooks()
      .subscribe(books => (this.books = books));
  }
  onSelect(book: Book) {
    this.selected = book;
  }
}
