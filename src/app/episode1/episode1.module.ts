import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Episode1PageRoutingModule } from './episode1-routing.module';

import { Episode1Page } from './episode1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Episode1PageRoutingModule
  ],
  declarations: [Episode1Page]
})
export class Episode1PageModule {}
