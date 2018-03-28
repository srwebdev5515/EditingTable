import { Injectable } from '@angular/core';
import { Book } from './book';
import * as lodash from 'lodash';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BookService {
  _books: Book[];
  books: BehaviorSubject<Book[]> = new BehaviorSubject([]);

  constructor() {
    this.clearBooks();
  }

  clearBooks() {
    this._books = [];
  }

  addBook(book: Book) {
    this._books.push(book);
    this.books.next(this._books);
  }

  updateBook(idx, book: Book) {
    lodash.merge(this._books[idx], book);
    this.books.next(this._books);
  }
}
