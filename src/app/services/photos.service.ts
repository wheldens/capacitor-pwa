import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../photos/photo.model';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  dataUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Photo[]> {
    return this.http.get<any>(this.dataUrl);
  }
}
