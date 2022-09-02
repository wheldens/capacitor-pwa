import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromPhotos from '../photos/photos.reducer';


export interface State {

  [fromPhotos.photosFeatureKey]: fromPhotos.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromPhotos.photosFeatureKey]: fromPhotos.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
