import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LightsabersPage } from './lightsabers.page';

const routes: Routes = [
  {
    path: '',
    component: LightsabersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LightsabersPageRoutingModule {}
