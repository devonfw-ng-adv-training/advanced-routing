import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BookModule } from './book/book.module';
import { CanDeactivateGuard } from './shared/routing/can-deactivate-guard.service';
import { routes } from './shared/routing/routes';
import { SharedModule } from './shared/shared.module';
import { CanDeactivateDialogComponent } from './shared/routing/can-deactivate-dialog/can-deactivate-dialog.component';

@NgModule({
  declarations: [AppComponent,
    CanDeactivateDialogComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(routes, { enableTracing: true }),
    // feature modules
    BookModule,
    MatDialogModule
  ],
  entryComponents: [CanDeactivateDialogComponent],
  providers: [CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
