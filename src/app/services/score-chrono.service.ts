import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScoreChronoService {
  gameScore = 0;
  elapsedTime = 0;
  timer: any;

  setScore(score: number) {
    this.gameScore = score;
  }

  getScore() {
    return this.gameScore;
  }

  startTimer() {
    this.timer = setInterval(() => {
      ++this.elapsedTime;
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  resetTimer() {
    this.elapsedTime = 0;
  }

  getElapsedTime() {
    return Math.floor(this.elapsedTime / 3600) + "h " + 
           Math.floor((this.elapsedTime % 3600) / 60) + "m " +
           this.elapsedTime % 60 + "s";
  }
}
