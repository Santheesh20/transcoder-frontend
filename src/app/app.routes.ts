import { Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard';
import { MuxComponent } from './modules/mux/mux';
import { FeedcheckerComponent } from './modules/feedchecker/feedchecker';
import { ProfileComponent } from './modules/profile/profile';
import { LoginComponent } from './modules/auth/login/login';
import { LogoutComponent } from './modules/auth/logout/logout';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'mux', component: MuxComponent },
  { path: 'feedchecker', component: FeedcheckerComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/logout', component: LogoutComponent },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' }, 
];
