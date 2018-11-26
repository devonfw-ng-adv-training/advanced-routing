import { Routes } from '@angular/router';
import { BookDetailsResolver } from '../../book/book-details/book-details.resolver';
import { BookOverviewComponent } from '../../book/book-overview/book-overview.component';
import { HomeComponent } from '../home/home.component';
import { BookDetailsComponent } from './../../book/book-details/book-details.component';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { AuthorizedRoutes } from './authorized-route';
import { Role } from './role';

export const routes: AuthorizedRoutes = [
  {
    path: 'home',
    component: HomeComponent,
    permitAll: true
  },
  {
    path: 'books',
    component: BookOverviewComponent,
    permitAll: true
  },
  {
    path: 'book/:id',
    component: BookDetailsComponent,
    resolve: {
      book: BookDetailsResolver
    },
    canDeactivate: [CanDeactivateGuard],
    permitAll: true
  },
  {
    path: 'book',
    component: BookDetailsComponent,
    canDeactivate: [CanDeactivateGuard],
    authorizedRoles: [Role.ADMIN]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full', permitAll: true }
];
