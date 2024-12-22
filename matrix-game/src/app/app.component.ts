import { Component, OnInit } from '@angular/core';
import { MaxMin } from './max-min';
import { MaxMinResult } from './max-min-result';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'matrix-game';

  public data: number[][] = [];

  public selectedFirstPlayerStrategy: string = '-1';

  public isPlayClicked = false;

  public secondPlayerStrategy: string = '';
  public secondPlayerStrategies: string[] = ['М\'яка','Нормальна','Сувора'];

  public firstPlayerWin: string = '';
  public firstPlayerStrategies: string[] = ['12000', '15000', '18000'];

  constructor() {}

  ngOnInit(): void {
    this.data = [
      [0, 24000, 48000],
      [-30000, 30000, 60000],
      [-60000, 0, 72000],
    ];
  }

  public onFirstPlayerOptionChanged(event: any) {
    this.isPlayClicked = false;
  }

  public onResetClick() {
    this.selectedFirstPlayerStrategy = "-1";
    this.isPlayClicked = false;
  }

  public onPlayClick() {
    const secondPlayerStrategy = Math.floor(Math.random() * 3)
    console.log(secondPlayerStrategy)
    this.firstPlayerWin = this.data[parseInt(this.selectedFirstPlayerStrategy)][secondPlayerStrategy].toString();
    this.secondPlayerStrategy = this.secondPlayerStrategies[secondPlayerStrategy]
    this.isPlayClicked = true;

  }

  public maxMin(): void{
    let maxMin = new MaxMin(this.data);
    let result = maxMin.optimize();
    let strategies = result.maxMinRows.map((index) => this.firstPlayerStrategies[index]);
    alert(`Оптимальні стратегії за максиміном: ${strategies} з найменшим виграшем ${result.maxMinValue}`);
  } 	
}
