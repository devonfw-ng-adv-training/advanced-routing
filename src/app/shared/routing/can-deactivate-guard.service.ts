import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { DirtyAware } from './dirty-aware';
import { CanDeactivateDialogComponent } from './can-deactivate-dialog/can-deactivate-dialog.component';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<DirtyAware> {
  constructor(public dialog: MatDialog) {}

  canDeactivate(component: DirtyAware): Observable<boolean> | boolean {
    if (!component.isDirty()) {
      return true;
    }

    const dialogRef = this.dialog.open(CanDeactivateDialogComponent);
    return dialogRef.afterClosed().pipe(
      map(result => {
        if (result) {
          return true;
        }
        return false;
      })
    );
  }
}
