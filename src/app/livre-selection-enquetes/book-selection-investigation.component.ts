// ============================================
//                    Import
// ============================================
import { Component, OnInit } from '@angular/core';
import { Investigation } from "../investigation";
import {NgIf, NgOptimizedImage} from "@angular/common";

// ============================================
//                Component
// ============================================
@Component({
  selector: 'app-livre-selection-enquetes',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './book-selection-investigation.component.html',
  styleUrl: './book-selection-investigation.component.css'
})
export class BookSelectionInvestigationComponent {

// ============================================
//                Variables
// ============================================

  /**
   * Test investigation list for the book
   */
  investigationList: Investigation[] = [
    {
      id: 1,
      title: "Une semaine chez macron",
      description: "Refaite une semaine de macron grace au image du tableau",
      success: false
    },
    {
      id: 2,
      title: "tweeter et trump",
      description: "les fakes news de trump sur tweeter",
      success: false
    },
    {
      id: 3,
      title: "valentin est italien",
      description: "les pizza c'est bon",
      success: false
    }
  ];

  /**
   * Current page number of the book
   */
  page: number = 1;

  /**
   * The current investigation show on the book
   */
  currentInvestigationOnPage: Investigation = this.investigationList[0];

  /**
   * Boolean to determine if an investigation is ongoing to adjust the display in the book
   */
  isConductingInvestigation: boolean = false;


  /**
   * Boolean that becomes true if the given answers are true or false
   */
  isCorrect: boolean = true;

  /**
   * Message displaying whether the investigation is passed or failed
   */
  correctionMessage: string = "";

  // ============================================
  //                Methods
  // ============================================

  /**
   * Increases the current page number and updates the investigation if possible.
   * If the page number is less than the maximum allowed, it increments the page number by 1 and updates the investigation.
   * @function increasePage
   * @returns {void}
   */
  increasePage(): void {
     if (this.currentInvestigationOnPage != this.investigationList[this.investigationList.length-1]){
       this.currentInvestigationOnPage = this.investigationList[this.currentInvestigationOnPage.id];
       this.page += 2;
     }
  }

  /**
   * Decreases the current page number by 1 if possible and updates the investigation.
   * @function decreasePage
   * @returns {void}
   */
  decreasePage(): void {
    if (this.currentInvestigationOnPage != this.investigationList[0]) {
      this.currentInvestigationOnPage = this.investigationList[this.currentInvestigationOnPage.id - 2];
      this.page -= 2;
    }
  }

  /**
   * Selects the current investigation and displays the ongoing investigation.
   * @function selectInvestigation
   * @returns {void}
   */
  selectInvestigation(): void {
    this.isConductingInvestigation = true;
    console.log(this.currentInvestigationOnPage.id)
  }

  /**
   * Validates the investigation response and updates the investigation state accordingly.
   * @function validateResponse
   * @returns {void}
   */
  validateResponse(): void {
    if (this.isCorrect) {
      this.currentInvestigationOnPage.success = true;
      this.correctionMessage = "Bravo vous avez réussi l'enquete!";
      this.isConductingInvestigation = false;
    } else {
      this.correctionMessage = "Recommence!";
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
}
