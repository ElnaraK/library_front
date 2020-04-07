import { Component, OnInit } from '@angular/core';
import {Category} from '../category';
import {CategoryService} from '../category.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  selected: Category;
  categories: Category[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public categoriesService: CategoryService,
    private http: HttpClient
  ) { }
  ngOnInit(): void {
    this.getCategories();
  }
  getCategories(): void {
    this.categoriesService.getCategories()
      .subscribe(categories => this.categories = categories);
  }
  onSelect(category: Category): void {
    this.selected = category;
  }
}
