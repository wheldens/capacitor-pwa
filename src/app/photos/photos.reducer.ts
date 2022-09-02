import { Action, createReducer, on } from '@ngrx/store';
import * as PhotosActions from './photos.actions';

export const photosFeatureKey = 'photos';

export interface State {
  data: any[];
}

export const initialState: State = {
  data: [],
};

export const reducer = createReducer(
  initialState,

  on(PhotosActions.loadPhotos, (state) => state),
  on(PhotosActions.loadPhotosSuccess, (state, action) => ({ ...state, data: action.payload })),
  on(PhotosActions.loadPhotosFailure, (state, action) => state)
);
