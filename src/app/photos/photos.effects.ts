import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as PhotosActions from './photos.actions';


@Injectable()
export class PhotosEffects {

  loadPhotoss$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(PhotosActions.loadPhotoss),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => PhotosActions.loadPhotossSuccess({ data })),
          catchError(error => of(PhotosActions.loadPhotossFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions) {}
}
