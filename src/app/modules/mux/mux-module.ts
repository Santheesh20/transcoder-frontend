import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MuxRoutingModule } from './mux-routing-module';
import { MuxListComponent } from './mux-list/mux-list.component';
import { AddMuxComponent } from './add-mux/add-mux';


@NgModule({
  declarations: [
    MuxListComponent,
    AddMuxComponent
  ],
  imports: [
    SharedModule,
    MuxRoutingModule
  ]
})
export class MuxModule { }
