import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Episode2Page } from './episode2.page';

const routes: Routes = [
  {
    path: '',
    component: Episode2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Episode2PageRoutingModule {}
