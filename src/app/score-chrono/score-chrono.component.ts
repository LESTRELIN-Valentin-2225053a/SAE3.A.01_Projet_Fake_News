import { Component } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score-chrono.component.html',
  styleUrls: ['./score-chrono.component.css']
})
export class ScoreChronoComponent {
  gameScore: number;
  timer: any;
  elapsedTime: number;

  constructor() {
    this.gameScore = 0;
    this.timer = 0;
    this.elapsedTime = 0;
  }

  initScore() {
    this.gameScore = 0;
  }

  increaseScore(plus: number) {
    this.gameScore += plus;
  }

  getScore() {
    return this.gameScore;
  }

  startTimer() {
    this.timer = setInterval(() => {
      this.elapsedTime++;
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  resetTimer() {
    this.elapsedTime = 0;
  }

  getElapsedTime() {
    return Math.floor(this.elapsedTime / 3600) + ":" + 
           Math.floor((this.elapsedTime % 3600) / 60) + ":" +
           this.elapsedTime % 60;
  }
}
