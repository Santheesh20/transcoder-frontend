import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/services';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { ProfileComponent } from './modules/auth/profile/profile.component';

export const routes: Routes = [{
  path: 'dashboard',
  canActivate: [AuthGuard],
  component: LayoutComponent,
  loadChildren: () => import('./modules/dashboard/dashboard-module').then(m => m.DashboardModule)
}, {
  path: 'mux',
  canActivate: [AuthGuard],
  component: LayoutComponent,
  loadChildren: () => import('./modules/mux/mux-module').then(m => m.MuxModule)
}, {
  path: 'feed',
  canActivate: [AuthGuard],
  component: LayoutComponent,
  loadChildren: () => import('./modules/feed/feed-module').then(m => m.FeedModule)
}, {
  path: 'profile',
  canActivate: [AuthGuard],
  component: LayoutComponent,
  children: [{
    path: '', component: ProfileComponent
  }]
}, {
  path: '',
  loadChildren: () => import('./modules/auth/auth-module').then(m => m.AuthModule)
}, {
  path: '**',
  redirectTo: ''
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }