import { createAction, props } from '@ngrx/store';

export const loadPhotoss = createAction(
  '[Photos] Load Photoss'
);

export const loadPhotossSuccess = createAction(
  '[Photos] Load Photoss Success',
  props<{ data: any }>()
);

export const loadPhotossFailure = createAction(
  '[Photos] Load Photoss Failure',
  props<{ error: any }>()
);
