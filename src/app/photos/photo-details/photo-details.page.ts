import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Photo } from '../photo.model';
import { getPhoto, State } from '../photos.reducer';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.page.html',
  styleUrls: ['./photo-details.page.scss'],
})
export class PhotoDetailsPage implements OnInit {
  photoId: number;
  photo$: Observable<any>; //  fix type Photo

  constructor(
    private store: Store<{ photos: State }>,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.photoId = parseInt(this.route.snapshot.params.photoId, 10);
    this.photo$ = this.store.select(getPhoto(this.photoId));
  }
}
