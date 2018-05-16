import {HomeComponent} from '../home/home.component';
import {Routes} from '@angular/router';
import {BookOverviewComponent} from '../../book/book-overview/book-overview.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'books',
    component: BookOverviewComponent
  },
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];
