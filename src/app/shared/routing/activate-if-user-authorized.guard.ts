import { Role } from './role';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { SecurityService } from './security.service';

@Injectable()
export class ActivateIfUserAuthorized implements CanActivate {
  constructor(private security: SecurityService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | boolean {
    if (route && route.routeConfig && route.routeConfig['permitAll']) {
      return true;
    }

    if (route && route.routeConfig && route.routeConfig['authorizedRoles']) {
      const routeAuthorizedRoles: Role[] = route.routeConfig['authorizedRoles'];
      return this.security.getCurrentUserRoles().pipe(
        map((roles: Role[]) =>
          roles.reduce(
            (prev, role) => routeAuthorizedRoles.includes(role) || prev,
            false
          )
        ),

        catchError(() => of(false))
      );
    }
    return false;
  }
}
