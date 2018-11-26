import { Routes } from '@angular/router';
import { BookDetailsResolver } from '../../book/book-details/book-details.resolver';
import { BookOverviewComponent } from '../../book/book-overview/book-overview.component';
import { HomeComponent } from '../home/home.component';
import { BookDetailsComponent } from './../../book/book-details/book-details.component';
import { CanDeactivateGuard } from './can-deactivate-guard.service';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'books',
    component: BookOverviewComponent
  },
  {
    path: 'book/:id',
    component: BookDetailsComponent,
    resolve: {
      book: BookDetailsResolver
    },
    canDeactivate: [CanDeactivateGuard]
  },
  {
    path: 'book',
    component: BookDetailsComponent,
    canDeactivate: [CanDeactivateGuard]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
