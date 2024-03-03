import { Component, inject } from '@angular/core';
import { ScoreChronoService } from '../services/score-chrono.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-score-chrono',
  templateUrl: './score-chrono.component.html',
  imports: [
    NgFor,
  ],
  standalone: true,
  styleUrls: ['./score-chrono.component.css']
})
export class ScoreChronoComponent {

  scoreChronoService: ScoreChronoService = inject(ScoreChronoService);
  listElements: { elapsedTime: string, score: number }[] = [];

  ngOnInit(): void {
    if (this.scoreChronoService.scoreHasChanged == true) {
      this.addNewListElement();
      this.scoreChronoService.scoreHasChanged = false;
    }
  }

  addNewListElement(): void {
    const elapsedTime = this.scoreChronoService.getElapsedTime();
    const score = this.scoreChronoService.getScore();
    this.scoreChronoService.listElements.unshift({ elapsedTime, score });
  }

  completedInvestigations(): number {
    return this.scoreChronoService.getCompletedInvestigationsNumber();
  }

  getListElements(): any {
    return this.scoreChronoService.getListElements();
  }
}
