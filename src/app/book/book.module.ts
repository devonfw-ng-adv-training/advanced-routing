import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookOverviewComponent } from './book-overview/book-overview.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [BookOverviewComponent]
})
export class BookModule { }
