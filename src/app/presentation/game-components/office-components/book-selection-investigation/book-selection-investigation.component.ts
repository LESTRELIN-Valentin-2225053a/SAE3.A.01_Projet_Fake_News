import {Component, TemplateRef, ViewChild} from '@angular/core';
import {Dialog, DialogRef} from "@angular/cdk/dialog";
import {SessionService} from "../../../../core/services/session.service";
import {InvestigationModel} from "../../../../core/domain/investigation.model";
import {WrongAnswerComponent} from "../wrong-answer/wrong-answer.component";
import {RightAnswerComponent} from "../right-answer/right-answer.component";
import {WaitingScreenComponent} from "../waiting-screen/waiting-screen.component";

/**
 * Component responsible for managing the book selection process during an investigation.
 * It allows users to select investigations, navigate through investigation pages, validate responses, and manage ongoing investigations.
 */
@Component({
  selector: 'app-book-selection-investigation',
  templateUrl: './book-selection-investigation.component.html',
  styleUrl: './book-selection-investigation.component.css'
})
export class BookSelectionInvestigationComponent{

  /** Indicates whether the user is connected */
  isUserConnected : boolean;

  /** List of investigations */
  investigations : InvestigationModel[];

  /** Current investigation on the page */
  currentInvestigationOnPage : InvestigationModel;

  /** Indicates whether an investigation is currently being conducted */
  isConductingInvestigation : boolean;

  /** Reference to the explanation dialog template */
  @ViewChild('explanationDialog', { read: TemplateRef }) explanationTemplate! : TemplateRef<any>;

  dialogRef: DialogRef<unknown, any>;

  /**
   * Constructor
   * @param dialog The Angular Material dialog service.
   * @param sessionService The service managing the user session.
   */
  constructor(public dialog: Dialog, private sessionService : SessionService){
    this.isUserConnected = sessionService.sessionBehavior === 'CONNECTED';
    this.investigations = sessionService.investigations.getValue();
    this.isConductingInvestigation = sessionService.isConductingInvestigation();
    // @ts-ignore
    this.currentInvestigationOnPage = this.isConductingInvestigation ? sessionService.currentInvestigation.getValue() : this.investigations[0];
  }

  /**
   * Gets the current page number.
   * @returns The current page number.
   */
  getPage(){
    return 2*this.investigations.indexOf(this.currentInvestigationOnPage)+1;
  }

  /**
   * Increases the current page number by 1 if possible and updates the current investigation.
   */
  increasePage(): void {
    const actualPageIndex= this.investigations.indexOf(this.currentInvestigationOnPage)
    if (actualPageIndex < this.investigations.length-1){
       this.currentInvestigationOnPage = this.investigations[actualPageIndex+1];
    }
  }

  /**
   * Decreases the current page number by 1 if possible and updates the current investigation.
   */
  decreasePage(): void {
    const actualPageIndex= this.investigations.indexOf(this.currentInvestigationOnPage)
    if (actualPageIndex > 0) {
      this.currentInvestigationOnPage = this.investigations[actualPageIndex-1];
    }
  }

  /**
   * Selects the current investigation and displays the ongoing investigation.
   */
  selectInvestigation(): void {
    this.isConductingInvestigation = true;
    const waitingDialog = this.dialog.open(WaitingScreenComponent,{autoFocus : 'false'});
    this.sessionService.changeInvestigation(this.currentInvestigationOnPage).subscribe(() => waitingDialog.close());
    this.dialogRef = this.dialog.open(this.explanationTemplate, {
      autoFocus: 'false',
    });
  }

  /**
   * Restarts the current investigation.
   */
  restartInvestigation(): void {
    this.isConductingInvestigation = true;
    const waitingDialog = this.dialog.open(WaitingScreenComponent,{autoFocus : 'false'});
    this.sessionService.restartInvestigation(this.currentInvestigationOnPage).subscribe(() => waitingDialog.close());
  }


  /**
   * Validates the user's response to the investigation and updates the investigation state accordingly.
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

  /**
   * Saves the progression of the current investigation.
   */
  saveInvestigation(): void {
    const waitingDialog = this.dialog.open(WaitingScreenComponent,{autoFocus : 'false'});
    this.sessionService.saveCurrentInvestigationProgression(this.currentInvestigationOnPage).subscribe(result => {
      if (result) {
        this.abandonInvestigation();
        waitingDialog.close();
      }
    });
  }

  /**
   * Opens the explanation dialog.
   */
  openDialogExplanation(): void {
    this.dialogRef = this.dialog.open(this.explanationTemplate, {
      autoFocus: 'false',
    });
  }

  /**
   * Opens the dialog for a correct answer.
   */
  openDialogRightAnswer(): void {
    this.dialog.open(RightAnswerComponent, {
      autoFocus: 'false',
    });
  }

  /**
   * Opens the dialog for a wrong answer.
   */
  openDialogWrongAnswer(): void {
    this.dialog.open(WrongAnswerComponent, {
      autoFocus: 'false',
    });
  }

  CloseDialog(): void {
    this.dialogRef.close();
  }
}
