import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import { ActivatedRoute } from '@angular/router';
import {BookService} from '../book.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  selected: Book;
  books: Book[];
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
  ) { }
  ngOnInit(): void {
    this.getBooks();
  }
  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => (this.books = books));
  }
  onSelect(book: Book): void {
    this.selected = book;
  }
}
