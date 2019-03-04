import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from '@app/app-routing.module';
import {AppComponent} from '@app/app.component';
import {NavbarComponent} from '@app/components/navbar/navbar.component';
import {OcticonDirective} from '@app/middleware/directives/octicon.directive';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MainComponent} from '@app/components/main/main.component';
import {LoginComponent} from '@app/components/login/login.component';
import {JwtInterceptor} from '@app/middleware/helpers/jwt.interceptor';
import {ErrorInterceptor} from '@app/middleware/helpers/error.interceptor';
import {ReactiveFormsModule} from '@angular/forms';
import {LockedComponent} from '@app/components/locked/locked.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OcticonDirective,
    MainComponent,
    LoginComponent,
    LockedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
