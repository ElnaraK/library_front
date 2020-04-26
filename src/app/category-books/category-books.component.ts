import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../book.service';

@Component({
  selector: 'app-category-books',
  templateUrl: './category-books.component.html',
  styleUrls: ['./category-books.component.css']
})
export class CategoryBooksComponent implements OnInit {
  selectedCategoryBooks: Book[];
  id = +this.route.snapshot.paramMap.get('id');
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
  ) { }
  ngOnInit(): void {
    this.getCategoryBooks();
  }
  getCategoryBooks(): void {
    this.bookService.getCategoryBooks(this.id)
      .subscribe(books => this.selectedCategoryBooks = books);
  }
}
