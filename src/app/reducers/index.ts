/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { environment } from '../../environments/environment';
import { ActionReducer, MetaReducer, ActionReducerMap } from '@ngrx/store';

export interface State {}
export const reducers: ActionReducerMap<State> = {};

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}
export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [debug];
