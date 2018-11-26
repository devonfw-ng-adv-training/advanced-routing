import { SecurityService } from './shared/routing/security.service';
import { Component } from '@angular/core';
import {
  RouterEvent,
  Router,
  ResolveStart,
  ResolveEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoadingData = false;

  constructor(
    private router: Router,
    private securityService: SecurityService
  ) {
    router.events.subscribe((routerEvent: RouterEvent) => {
      this.checkRouterEvent(routerEvent);
    });
  }

  checkRouterEvent(routerEvent: RouterEvent): void {
    if (routerEvent instanceof ResolveStart) {
      this.isLoadingData = true;
    }
    if (
      routerEvent instanceof ResolveEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError
    ) {
      this.isLoadingData = false;
    }
  }

  slideUpdate(e: Event) {
    console.log('Changing App Roles');
    this.securityService.changeRoleTo(e['checked']);
  }
}
