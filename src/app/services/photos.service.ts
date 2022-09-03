import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap, mergeMap } from 'rxjs/operators';
import { Photo } from '../photos/photo.model';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  dataUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Photo[]> {
    return this.http.get<any>(this.dataUrl).pipe(
      map((photos) =>
        photos.map((photo) => ({
          id: photo.id,
          title: photo.title,
          url: photo.url,
          thumbnailUrl: photo.thumbnailUrl,
        }))
      )
    );
  }
}
