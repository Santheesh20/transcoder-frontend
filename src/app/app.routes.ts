import { Routes } from '@angular/router';

// Import standalone components
import { DashboardComponent } from './modules/dashboard/dashboard';
import { MuxComponent } from './modules/mux/mux';
import { FeedcheckerComponent } from './modules/feedchecker/feedchecker';
import { ProfileComponent } from './modules/profile/profile';


export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'mux', component: MuxComponent },
  { path: 'feedchecker', component: FeedcheckerComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // No leading slash
];
