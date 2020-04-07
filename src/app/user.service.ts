import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = 'assets/allusers.json';
  user: User;
  httpHeader = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(
    private http: HttpClient,
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.users);
  }
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.users, user, this.httpHeader);
  }
  addBook(user: User, isbn: number): Observable<User[]> {
    this.getUsers()
      .subscribe(data => {
        this.user = data.find(search => (search === user));
      });
    this.user.booksISBN.push(isbn);
    return this.http.put<User[]>(this.users, this.user, this.httpHeader);
  }
}
