import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPhotos from './photos.reducer';

export const selectPhotosState = createFeatureSelector<fromPhotos.State>(
  fromPhotos.photosFeatureKey
);
