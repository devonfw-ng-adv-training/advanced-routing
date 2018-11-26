import { Injectable } from '@angular/core';
import { Role } from './role';
import { Observable, of } from 'rxjs';

@Injectable()
export class SecurityService {
  currentRoles: Role[] = [Role.ADMIN, Role.ANONYMOUS];

  getCurrentUserRoles(): Observable<Role[]> {
    return of(this.currentRoles);
  }

  changeRoleTo(isAdmin: boolean) {
    if (isAdmin) {
      this.currentRoles = [Role.ADMIN];
    } else {
      this.currentRoles = [Role.ANONYMOUS];
    }
  }
}
