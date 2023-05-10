import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Episode2PageRoutingModule } from './episode2-routing.module';

import { Episode2Page } from './episode2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Episode2PageRoutingModule
  ],
  declarations: [Episode2Page]
})
export class Episode2PageModule {}
