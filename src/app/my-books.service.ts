import { Injectable } from '@angular/core';
import { Book } from './book';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Mybook} from './mybook';

@Injectable({
  providedIn: 'root'
})
export class MyBooksService {
  base = 'http://127.0.0.1:8000';
  httpHeader = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(
    private http: HttpClient,
  ) { }

  getMyBooks(): Observable<Mybook> {
    return this.http.get<Mybook>(`${this.base}/api/users/${localStorage.getItem('mail')}/mybooks/`);
  }
  addBook(id: number): Observable<Mybook> {
    return this.http.post<Mybook>(`${this.base}/api/users/${localStorage.getItem('mail')}/mybooks/${id}`, {
      id
    });
  }
  deleteBook(id: number): Observable<Mybook> {
    return this.http.delete<Mybook>(`${this.base}/api/users/${localStorage.getItem('mail')}/mybooks/`, this.httpHeader);
  }
}
