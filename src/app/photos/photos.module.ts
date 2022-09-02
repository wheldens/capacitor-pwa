import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotosPageRoutingModule } from './photos-routing.module';

import { PhotosPage } from './photos.page';
import { EffectsModule } from '@ngrx/effects';
import { PhotosEffects } from './photos.effects';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotosPageRoutingModule,
    EffectsModule.forFeature([PhotosEffects])
  ],
  declarations: [PhotosPage]
})
export class PhotosPageModule {}
