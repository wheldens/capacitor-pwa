import { createAction, props } from '@ngrx/store';

export const loadPhotos = createAction(
  '[Photos] Load Photos'
);

export const loadPhotosSuccess = createAction(
  '[Photos] Load Photos Success',
  props<{ payload: any }>()
);

export const loadPhotosFailure = createAction(
  '[Photos] Load Photos Failure',
  props<{ error: any }>()
);
