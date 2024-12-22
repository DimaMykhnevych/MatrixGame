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
      [0, 24000, 48000],
      [-30000, 30000, 60000],
      [-60000, 0, 72000],
    ];
  }
}
