import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as PhotosActions from './photos.actions';
import { PhotosService } from '../services/photos.service';
import { Action } from '@ngrx/store';

@Injectable()
export class PhotosEffects {

  loadPhotos$: any = createEffect(
    (): Observable<Action> =>
      this.actions$.pipe(
        ofType(PhotosActions.loadPhotos.type),
        mergeMap(() =>
          this.photosService.getAll().pipe(
            map((photos) => ({
              type: PhotosActions.loadPhotosSuccess.type,
              payload: photos,
            })),
            catchError(() => EMPTY)
          )
        )
      )
  );

  constructor(
    private actions$: Actions,
    private photosService: PhotosService
  ) {}
}
