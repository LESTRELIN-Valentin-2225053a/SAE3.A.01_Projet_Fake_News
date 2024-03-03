import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScoreChronoService {
  completedInvestigations = 0;
  gameScore = 0;
  elapsedTime = 0;
  timer: any;
  listElements: { elapsedTime: string, score: number }[] = [];
  scoreHasChanged: boolean = false;

  reset(): void {
    clearInterval(this.timer);
    this.completedInvestigations = 0;
    this.gameScore = 0;
    this.elapsedTime = 0;
  }

  startTimer(): void {
    this.timer = setInterval(() => {
      ++this.elapsedTime;
    }, 1000);
  }

  oneMoreInvestigation(): void {
    ++this.completedInvestigations;
  }

  addScore(score: number) {
    this.gameScore = score;
    this.scoreHasChanged = true;
  }

  getCompletedInvestigationsNumber(): number {
    return this.completedInvestigations;
  }

  getScore(): number {
    return this.gameScore;
  }

  getElapsedTime(): string {
    return Math.floor(this.elapsedTime / 3600) + "h " + 
           Math.floor((this.elapsedTime % 3600) / 60) + "m " +
           this.elapsedTime % 60 + "s";
  }

  getListElements() {
    return this.listElements;
  }
}
