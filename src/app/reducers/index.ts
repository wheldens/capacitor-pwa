import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromPhotos from '../photos/photos.reducer';
import * as fromRouter from './router.reducer';

export interface State {
  [fromPhotos.photosFeatureKey]: fromPhotos.State;
  [fromRouter.routerFeatureKey]: fromRouter.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromPhotos.photosFeatureKey]: fromPhotos.reducer,
  [fromRouter.routerFeatureKey]: fromRouter.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];



//SELECTORS

export const getRouter =
  createFeatureSelector<fromRouter.State>('routerReducer');

export const getRouterState = createSelector(
  getRouter,
  (routerState: fromRouter.State) => routerState.state
);
