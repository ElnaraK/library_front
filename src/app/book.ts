import {Category} from './category';

export interface Book {
  id: number;
  category: Category;
  isbn: number;
  title: string;
  description: string;
  image: string;
  publisher: string;
  author: string;
  genre: string;
  year: number;
  pages: number;
  book: string;
}
