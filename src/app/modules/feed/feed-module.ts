import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FeedRoutingModule } from './feed-routing-module';
import { FeedCheckComponent } from './feed-check/feed-check.component';

@NgModule({
  declarations: [
    FeedCheckComponent
  ],
  imports: [
    SharedModule,
    FeedRoutingModule
  ]
})
export class FeedModule { }
