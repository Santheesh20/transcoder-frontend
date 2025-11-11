import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedCheckComponent } from './feed-check/feed-check.component';

const routes: Routes = [{
  path: 'check',
  component: FeedCheckComponent
}, {
  path: '**',
  redirectTo: 'check'
}];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})

export class FeedRoutingModule { }
