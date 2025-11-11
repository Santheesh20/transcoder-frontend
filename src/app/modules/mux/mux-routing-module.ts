import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MuxListComponent } from './mux-list/mux-list.component';
import { AddMuxComponent } from './add-mux/add-mux';


const routes: Routes = [{
  path: 'list',
  component: MuxListComponent
}, {
  path: 'add',
  component: AddMuxComponent
}, {
  path: '**',
  redirectTo: 'list'
}];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})

export class MuxRoutingModule { }
