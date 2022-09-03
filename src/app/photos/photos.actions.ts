import { createAction, props } from '@ngrx/store';
import { Photo } from './photo.model';

export const loadPhotos = createAction(
  '[Photos Api] Load Photos'
);

export const loadPhotosSuccess = createAction(
  '[Photos Api] Load Photos Success',
  props<{ payload: Photo[] }>()
);

export const loadPhotosFailure = createAction(
  '[Photos Api] Load Photos Failure',
  props<{ error: any }>()
);
