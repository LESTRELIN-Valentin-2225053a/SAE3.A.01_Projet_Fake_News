// ============================================
//                    Import
// ============================================
import {Component, inject, OnDestroy} from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {SessionService} from "../services/session.service";
import {RightAnswerComponent} from "../right-answer/right-answer.component";
import {Dialog} from "@angular/cdk/dialog";
import {WrongAnswerComponent} from "../wrong-answer/wrong-answer.component";
import {Investigation} from "../interfaces/investigation";

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
// ===========================================
  investigations : Investigation[];
  currentInvestigationOnPage : Investigation;
  isConductingInvestigation : boolean;

// ============================================
//                Methods
// ============================================

  constructor(public dialog: Dialog, public sessionService : SessionService) {
    this.investigations = sessionService.investigations;
    this.isConductingInvestigation = sessionService.isConductingInvestigation();
    this.currentInvestigationOnPage = this.isConductingInvestigation ? sessionService.currentInvestigation : this.investigations[0];
  }

  getPage(){
    return 2*this.investigations.indexOf(this.currentInvestigationOnPage)+1;
  }

  /**
   * Increases the current page number and updates the investigation if possible.
   * If the page number is less than the maximum allowed, it increments the page number by 1 and updates the investigation.
   * @function increasePage
   * @returns {void}
   */
  increasePage(): void {
    const actualPageIndex= this.investigations.indexOf(this.currentInvestigationOnPage)
    if (actualPageIndex < this.investigations.length-1){
       this.currentInvestigationOnPage = this.investigations[actualPageIndex+1];
    }
    console.log(this.currentInvestigationOnPage);
  }

  /**
   * Decreases the current page number by 1 if possible and updates the investigation.
   * @function decreasePage
   * @returns {void}
   */
  decreasePage(): void {
    const actualPageIndex= this.investigations.indexOf(this.currentInvestigationOnPage)
    if (actualPageIndex > 0) {
      this.currentInvestigationOnPage = this.investigations[actualPageIndex-1];
    }
    console.log(this.currentInvestigationOnPage);
  }

  /**
   * Selects the current investigation and displays the ongoing investigation.
   * @function selectInvestigation
   * @returns {void}
   */
  selectInvestigation(): void {
    this.isConductingInvestigation = true;
    this.sessionService.changeInvestigation(this.currentInvestigationOnPage);
  }

  /**
   * Validates the investigation response and updates the investigation state accordingly.
   * @function validateResponse
   * @returns {void}
   */
  validateResponse(): void {
    if (this.sessionService.validateInvestigation()) {
      this.currentInvestigationOnPage.completion = true;
      this.openDialogRightAnswer();
      this.isConductingInvestigation = false;
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
    this.isConductingInvestigation = false;
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
