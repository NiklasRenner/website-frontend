import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from '@app/app-routing.module';
import {AppComponent} from '@app/app.component';
import {HeaderComponent} from '@app/components/header/header.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MainComponent} from '@app/components/main/main.component';
import {LoginComponent} from '@app/components/login/login.component';
import {JwtInterceptor} from '@app/middleware/helpers/jwt.interceptor';
import {ErrorInterceptor} from '@app/middleware/helpers/error.interceptor';
import {ReactiveFormsModule} from '@angular/forms';
import {LockedComponent} from '@app/components/locked/locked.component';
import {FooterComponent} from '@app/components/footer/footer.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { PasteComponent } from '@app/components/paste/paste.component';
import { PasteShowComponent } from './components/paste-show/paste-show.component';
import {Base64Component} from "@app/components/base64/base64.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LockedComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    PasteComponent,
    PasteShowComponent,
    Base64Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
