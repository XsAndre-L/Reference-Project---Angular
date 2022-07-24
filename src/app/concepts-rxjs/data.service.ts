import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable, switchMap, tap } from 'rxjs';

import { Photo } from './photo.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getPhotos(): Observable<Photo[]> {
    console.log('gettting Photos');
    return this.http
      .get<Photo[]>('https://jsonplaceholder.typicode.com/photos?_limit=10')
      .pipe
      // tap((result: Photo) => {     // tap() does not change result
      //   console.log(result.thumbnailUrl);
      // })
      // map((photoList: Photo[]) => {
      //   // map() can change result because it returns the new result
      //   photoList.map((photo: Photo) => {}); // js .map() iterates over array
      //   return photoList;
      // })

      // RXJS FILTERS
      //filter((photo: Photo[], index: number) => photo[index].id == 1) // TODO : Why Does Filter not only return photo with ID 1

      // filter((photo: Photo[], index: number) => {
      //   return photo[index].id! > 5;
      // }),
      // map((data) => {
      //   return data;
      // })

      // Get list of photos : map()
      // Get individual photos and access individualy with switchMap
      // https://rxjs.dev/api/operators/switchMap
      // map((photos: Photo[])=>{
      //   photos.map((photo: Photo)=>{
      //     switchMap((x: Photo[])=>{
      //       return x;
      //     })

      //   })
      // })
      ();
  }
}
