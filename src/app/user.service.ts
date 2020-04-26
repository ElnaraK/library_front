import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';
import {LoginResponse} from './models';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  base = 'http://127.0.0.1:8000';
  constructor(
    private http: HttpClient,
  ) { }
  login(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.base}/api/login/`, {
      username,
      password,
    });
  }
  register(mail, password): Observable<User> {
    return this.http.post<User>(`${this.base}/api/registration/`, {
      mail,
      password,
    });
  }
}
