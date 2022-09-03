import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Photo } from './photo.model';
import * as photosActions from './photos.actions';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.page.html',
  styleUrls: ['./photos.page.scss'],
})
export class PhotosPage implements OnInit {
  photos$: Observable<Photo[]> = this.store.select((state) => state.photos);

  constructor(private store: Store<{ photos: Photo[] }>) {}

  ngOnInit() {
    this.store.dispatch({ type: photosActions.loadPhotos.type });
  }
}
