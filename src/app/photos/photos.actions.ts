import { createAction, props } from '@ngrx/store';
import { Photo } from './photo.model';

export const loadPhotos = createAction(
  '[Photos] Load Photos'
);

export const loadPhotosSuccess = createAction(
  '[Photos] Load Photos Success',
  props<{ payload: Photo[] }>()
);

export const loadPhotosFailure = createAction(
  '[Photos] Load Photos Failure',
  props<{ error: any }>()
);
