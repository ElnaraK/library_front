import { Injectable } from '@angular/core';
import { Book } from './book';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MybooksService {
  books = 'assets/my-books.json';
  constructor(
    private http: HttpClient,
  ) { }

  getMyBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.books);
  }
  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.books, book);
  }
}
