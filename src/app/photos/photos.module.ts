import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotosPageRoutingModule } from './photos-routing.module';

import { PhotosPage } from './photos.page';
import { EffectsModule } from '@ngrx/effects';
import { PhotosEffects } from './photos.effects';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotosPageRoutingModule,
    EffectsModule.forFeature([PhotosEffects]),
    ScrollingModule,
    SharedModule
  ],
  declarations: [PhotosPage]
})
export class PhotosPageModule {}
