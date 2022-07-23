import { Component, OnInit } from '@angular/core';

@Component({
  // standalone: true, // only available in angular 14
  selector: 'app-standalone-component',
  templateUrl: './standalone-component.component.html',
  styleUrls: ['./standalone-component.component.scss'],
})
export class StandaloneComponentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
