// ============================================
//                    Import
// ============================================
import {Component, TemplateRef, ViewChild} from '@angular/core';
import {Dialog} from "@angular/cdk/dialog";
import {SessionService} from "../../../../core/services/session.service";
import {InvestigationModel} from "../../../../core/domain/investigation.model";
import {WrongAnswerComponent} from "../wrong-answer/wrong-answer.component";
import {RightAnswerComponent} from "../right-answer/right-answer.component";


// ============================================
//                Component
// ============================================
@Component({
  selector: 'app-book-selection-investigation',
  templateUrl: './book-selection-investigation.component.html',
  styleUrl: './book-selection-investigation.component.css'
})
export class BookSelectionInvestigationComponent{

// ============================================
//                Variables
// ===========================================
  investigations : InvestigationModel[];
  currentInvestigationOnPage : InvestigationModel;
  isConductingInvestigation : boolean;
  @ViewChild('explanationDialog', { read: TemplateRef }) explanationTemplate! : TemplateRef<any>;

// ============================================
//                Methods
// ============================================

  constructor(public dialog: Dialog, private sessionService : SessionService){
    this.investigations = sessionService.investigations.getValue();
    this.isConductingInvestigation = sessionService.isConductingInvestigation();
    // @ts-ignore
    this.currentInvestigationOnPage = this.isConductingInvestigation ? sessionService.currentInvestigation.getValue() : this.investigations[0];
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

  restartInvestigation(): void {
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
    this.sessionService.abandonInvestigation();
  }

  openDialogExplanation(): void {
    this.dialog.open(this.explanationTemplate,{
      autoFocus : 'false',
    });
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
