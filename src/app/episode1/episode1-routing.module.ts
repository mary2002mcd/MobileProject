import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Episode1Page } from './episode1.page';

const routes: Routes = [
  {
    path: '',
    component: Episode1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Episode1PageRoutingModule {}
