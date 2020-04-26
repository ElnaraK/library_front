import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  base = 'http://127.0.0.1:8000';
  constructor(
    private http: HttpClient,
  ) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.base}/api/books/`);
  }
  getBook(isbn: number): Observable<Book> {
    return this.http.get<Book>(`${this.base}/api/books/${isbn}/`);
  }
  getCategoryBooks(id: number): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.base}/api/categories/${id}/`);
  }
}
