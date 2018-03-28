import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';
import * as lodash from 'lodash';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: Book[];
  orgBooks: Book[];
  editing: boolean[];

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.bookService.books.subscribe(
      books => {
        this.books = lodash.cloneDeep(books);
        this.orgBooks = lodash.cloneDeep(books);
        this.editing = this.books.map(book => false);
      }
    );

    for (let i = 10; i < 42; i++) {
      this.bookService.addBook({ name: `book ${i}`, authors: `author ${i}`, numberOfPages: i, dateOfPublication: new Date() });
    }
  }

  editBook(idx) {
    this.editing[idx] = true;
  }

  saveBook(idx) {
    this.bookService.updateBook(idx, this.books[idx]);
    this.editing[idx] = false;
  }

  cancelEditing(idx) {
    lodash.merge(this.books[idx], this.orgBooks[idx]);
    this.editing[idx] = false;
  }
}
