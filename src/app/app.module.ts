import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { TokenInterceptor } from './shared/interceptors/token.interceptor';
import { LoaderInterceptor } from './shared/interceptors/loader.interceptor';
import { ProfileComponent } from './modules/auth/profile/profile.component';
import {
  MasterDataService,
  MasterUrlService,
  SnackbarService,
  AuthService,
  ClientService,
  ErrorMessageService,
  RelayService
} from './shared/services';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    MasterDataService,
    MasterUrlService,
    SnackbarService,
    AuthService,
    ClientService,
    ErrorMessageService,
    RelayService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
