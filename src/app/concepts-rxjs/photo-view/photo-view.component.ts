import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Photo } from '../photo.model';

@Component({
  selector: 'app-photo-view',
  templateUrl: './photo-view.component.html',
  styleUrls: ['./photo-view.component.scss'],
})
export class PhotoViewComponent implements OnInit {
  myLibrary: Photo[] | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    const observer = {
      next: (result: any) => {
        console.log(result);
        this.myLibrary = result;
      },
      error: (error: any) => {
        console.log('ERRORRR');
      },
      complete: () => {
        console.log('COMPLETED');
      },
    };

    this.dataService.getPhotos().subscribe(observer);
  }
}
