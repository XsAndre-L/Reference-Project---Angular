import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { Photo } from './photo.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getPhotos(): Observable<Photo[]> {
    console.log('gettting Photos');
    return this.http.get<Photo[]>('https://via.placeholder.com/150').pipe(
      map((photoList: any) => {
        console.log(photoList);
        // photoList.map((photo) => {});
        return photoList;
      })
    );
  }
}
