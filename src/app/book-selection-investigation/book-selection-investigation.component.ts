// ============================================
//                    Import
// ============================================
import {Component, inject} from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {SessionService} from "../services/session.service";
import {RightAnswerComponent} from "../right-answer/right-answer.component";
import {Dialog} from "@angular/cdk/dialog";
import {WrongAnswerComponent} from "../wrong-answer/wrong-answer.component";
import { ScoreChronoService } from '../services/score-chrono.service';

// ============================================
//                Component
// ============================================
@Component({
  selector: 'app-book-selection-investigation',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './book-selection-investigation.component.html',
  styleUrl: './book-selection-investigation.component.css'
})
export class BookSelectionInvestigationComponent{

// ============================================
//                Variables
// ============================================

  sessionService: SessionService = inject(SessionService);
  scoreChronoService: ScoreChronoService = inject(ScoreChronoService);

// ============================================
//                Methods
// ============================================

  constructor(public dialog: Dialog) {
  }

  /**
   * Increases the current page number and updates the investigation if possible.
   * If the page number is less than the maximum allowed, it increments the page number by 1 and updates the investigation.
   * @function increasePage
   * @returns {void}
   */
  increasePage(): void {
     if (this.sessionService.currentInvestigationOnPage != this.sessionService.investigations[this.sessionService.investigations.length-1]){
       this.sessionService.currentInvestigationOnPage = this.sessionService.investigations[this.sessionService.currentInvestigationOnPage.investigation_id];
       this.sessionService.page += 2;
     }
  }

  /**
   * Decreases the current page number by 1 if possible and updates the investigation.
   * @function decreasePage
   * @returns {void}
   */
  decreasePage(): void {
    if (this.sessionService.currentInvestigationOnPage != this.sessionService.investigations[0]) {
      this.sessionService.currentInvestigationOnPage = this.sessionService.investigations[this.sessionService.currentInvestigationOnPage.investigation_id - 2];
      this.sessionService.page -= 2;
    }
  }

  /**
   * Selects the current investigation and displays the ongoing investigation.
   * @function selectInvestigation
   * @returns {void}
   */
  selectInvestigation(): void {
    this.sessionService.isConductingInvestigation = true;
    // sessionStorage.setItem('currentInvestigation',this.sessionService.currentInvestigationOnPage.investigation_id.toString())
    // console.log(this.sessionService.currentInvestigationOnPage.investigation_id);
    this.sessionService.changeInvestigation(this.sessionService.currentInvestigationOnPage);
  }

  /**
   * Validates the investigation response and updates the investigation state accordingly.
   * @function validateResponse
   * @returns {void}
   */
  validateResponse(): void {
    if (this.sessionService.validateInvestigation()) {
      this.sessionService.currentInvestigationOnPage.completion = true;
      // this.sessionService.correctionMessage = "Bravo vous avez réussi l'enquête!";
      this.scoreChronoService.oneMoreInvestigation();
      this.scoreChronoService.addScore(10);
      this.openDialogRightAnswer();
      this.sessionService.isConductingInvestigation = false;
    } else {
      this.openDialogWrongAnswer();
    }
  }

  /**
   * Abandons the ongoing investigation and resets the investigation states.
   * @function abandonInvestigation
   * @returns
   */
  abandonInvestigation(): void {
    this.sessionService.isConductingInvestigation = false;
  }

  /**
   *
   */
  openDialogRightAnswer(): void {
    this.dialog.open(RightAnswerComponent, {
      autoFocus: 'false',
    });
  }

  /**
   *
   */
  openDialogWrongAnswer(): void {
    this.dialog.open(WrongAnswerComponent, {
      autoFocus: 'false',
    });
  }
}
