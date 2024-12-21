import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'matrix-game';

  public data: number[][] = [];

  constructor() {}

  ngOnInit(): void {
    this.data = [
      [1, 0, 0, 1, 0, 0, 40000],
      [0, 1, 0, 0, 1, 0, 2500],
      [0, 0, 1, 0, 0, 1, 2000],
      [0, 500, 500, 0, 1000, 500, 0],
      [20000, 1000, 1000, 30000, 5000, 1000, 0],
      [0.1, 0.025, 0.02, 0.11, 0.02, 0.025, 0],
      [1, 41.43, 44.76, 1, 41.43, 44.76, 0],
    ];
  }
}
