import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Photo } from './photo.model';
import * as photosActions from './photos.actions';
import { getPhotos, State } from './photos.reducer';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.page.html',
  styleUrls: ['./photos.page.scss'],
})
export class PhotosPage implements OnInit {
  photos$: Observable<Photo[]> = this.store.select(getPhotos);
  constructor(private store: Store<{ photos: State }>) {}

  ngOnInit() {
    this.store.dispatch({ type: photosActions.loadPhotos.type });
  }
}
