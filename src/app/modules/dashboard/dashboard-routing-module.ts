import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { GpuComponent } from './gpu/gpu.component';

const routes: Routes = [{
  path: 'gpu',
  component: GpuComponent
}, {
  path: '',
  component: DashboardComponent
}, {
  path: '**',
  redirectTo: ''
}];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})

export class DashboardRoutingModule { }
