import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LightsabersPageRoutingModule } from './lightsabers-routing.module';

import { LightsabersPage } from './lightsabers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LightsabersPageRoutingModule
  ],
  declarations: [LightsabersPage]
})
export class LightsabersPageModule {}
