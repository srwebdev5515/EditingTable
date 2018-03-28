import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './book.component';
import { BookService } from './book.service';
import { DataTableModule } from 'angular2-datatable';
import { MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    FormsModule,
    BrowserAnimationsModule,

    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule
  ],
  declarations: [
    BookComponent
  ],
  exports: [
    BookComponent
  ],
  providers: [
    BookService
  ]
})
export class BookModule { }
