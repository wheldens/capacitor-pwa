import { Action, createReducer, on } from '@ngrx/store';
import * as PhotosActions from './photos.actions';

export const photosFeatureKey = 'photos';

export interface State {
  test: boolean;
}

export const initialState: State = {
  test: false,
};

export const reducer = createReducer(
  initialState,

  on(PhotosActions.loadPhotoss, (state) => state),
  on(PhotosActions.loadPhotossSuccess, (state, action) => state),
  on(PhotosActions.loadPhotossFailure, (state, action) => state)
);
