import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'matrix-game';

  public data: number[][] = [];

  public selectedFirstPlayerStrategy: string | null = null;

  public isPlayClicked = false;

  public secondPlayerStrategy: string = '(1, 1)';

  public firstPlayerWin: string = '-10';

  constructor() {}

  ngOnInit(): void {
    this.data = [
      [0, 24000, 48000],
      [-30000, 30000, 60000],
      [-60000, 0, 72000],
    ];
  }

  public onFirstPlayerOptionChanged(event: any) {
    console.log(event.value);
  }

  public onResetClick() {
    this.selectedFirstPlayerStrategy = null;
    this.isPlayClicked = false;
  }

  public onPlayClick() {
    this.isPlayClicked = true;
  }
}
