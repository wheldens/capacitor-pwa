import {
  Action,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { Photo } from './photo.model';
import * as PhotosActions from './photos.actions';

export const photosFeatureKey = 'photos';

export interface State {
  data: Photo[];
}

export const initialState: State = {
  data: [],
};

export const reducer = createReducer(
  initialState,

  on(PhotosActions.loadPhotos, (state) => state),
  on(PhotosActions.loadPhotosSuccess, (state, action) => ({
    ...state,
    data: action.payload,
  })),
  on(PhotosActions.loadPhotosFailure, (state, action) => state)
);

// SELECTORS
export const getPhotoState = createFeatureSelector<State>(photosFeatureKey);
export const getPhotosSelector = createSelector(
  getPhotoState,
  (photoState: State) => photoState.data
);
