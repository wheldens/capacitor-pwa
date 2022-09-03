import {
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

export const getPhotos = createSelector(
  getPhotoState,
  (photoState: State) => photoState.data
);

export const getPhoto = (id: number) =>
  createSelector(getPhotoState, (photoState: State) => {
    if (photoState) {
      return photoState.data.find((photo) => photo.id === id);
    } else {
      return {};
    }
  });
