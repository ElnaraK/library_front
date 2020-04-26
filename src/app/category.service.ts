import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  base = 'http://127.0.0.1:8000';
  constructor(
    private http: HttpClient,
  ) { }
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.base}/api/categories/`);
  }
}
