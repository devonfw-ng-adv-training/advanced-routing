import { Role } from './role';
import { Route } from '@angular/router';

export interface AuthorizedRoute extends Route {
  authorizedRoles?: Role[];
  permitAll?: boolean;
  children?: AuthorizedRoutes;
}

export declare type AuthorizedRoutes = AuthorizedRoute[];
