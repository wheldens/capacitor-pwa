import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../services/photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.page.html',
  styleUrls: ['./photos.page.scss'],
})
export class PhotosPage implements OnInit {
  photos: any[];

  constructor(private photosService: PhotosService) {}

  ngOnInit() {
    this.photosService
      .getPhotos()
      .subscribe((photos) => (this.photos = photos));
  }
}
