import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = 'assets/allusers.json';
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
}
