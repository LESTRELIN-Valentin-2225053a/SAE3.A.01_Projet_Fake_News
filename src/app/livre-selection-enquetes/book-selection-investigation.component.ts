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
export class BookSelectionInvestigationComponent implements OnInit {

// ============================================
//                Variables
// ============================================

  /**
   * Test investigation list for the book
   */
  investigationList: Investigation[] = [
    {
      id: 0,
      title: "Ne fais pas d'enquetes",
      description: "aucune enquetes selectionner",
      success: false
    },
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
   * Maximum investigation number of the book = length of the Investigation list
   */
  maxInvestigation: number = this.investigationList.length;
// directement utilisé investigationList.length

  /**
   * Investigation title retrieved based on the current page
   */
  title: string = "";
  // remplacé par un attribut investigation directement

  /**
   * Investigation description retrieved based on the current page
   */
  description: string = "";
  // remplacé par un attribut investigation directement

  /**
   * Boolean to determine if an investigation is ongoing to adjust the display in the book
   */
  isConductingInvestigation: boolean = false;

  /**
   * Current investigation number for communication to other components for file retrieval
   */
  currentInvestigation: number = 0;
  // remplacé par un attribut investigation directement


  /**
   * Boolean that becomes true if the given answers are true or false
   */
  isCorrect: boolean = true;

  /**
   * Message displaying whether the investigation is passed or failed
   */
  correctionMessage: string = "";

  /**
   *
   */
  idInvestigationShow: number = 1;
  // remplacé par un attribut investigation directement pour stocker l'enquete affiché sur la page

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
    // if (this.currentInvestigationOnPage != this.investigationList[this.investigationList.length-1]){
    //   this.currentInvestigationOnPage = this.investigationList[this.currentInvestigationOnPage.id+1]; PAS BON ZIZI KAKA
    // }
    if (this.idInvestigationShow < this.maxInvestigation) {
      this.idInvestigationShow += 1
      this.page += 2;
      this.updateInvestigation();
    }
  }

  /**
   * Decreases the current page number by 1 if possible and updates the investigation.
   * @function decreasePage
   * @returns {void}
   */
  decreasePage(): void {
    if (this.idInvestigationShow > 1) {
      this.idInvestigationShow -= 1
      this.page -= 2;
      this.updateInvestigation();
    }
  }

  /**
   * Angular lifecycle method called after the components have been initialized.
   * Updates the investigation upon initialization.
   * @function ngOnInit
   * @returns {void}
   */
  ngOnInit(): void {
    this.updateInvestigation();
  }

  /**
   * Updates the details of the current investigation based on the current page.
   * @function updateInvestigation
   * @returns {void}
   */
  updateInvestigation(): void {
    this.title = this.investigationList[this.idInvestigationShow].title;
    this.description = this.investigationList[this.idInvestigationShow].description;
  }

  /**
   * Selects the current investigation and displays the ongoing investigation.
   * @function selectInvestigation
   * @returns {void}
   */
  selectInvestigation(): void {
    this.currentInvestigation = this.idInvestigationShow;
    this.isConductingInvestigation = true;
  }

  /**
   * Validates the investigation response and updates the investigation state accordingly.
   * @function validateResponse
   * @returns {void}
   */
  validateResponse(): void {
    if (this.isCorrect) {
      this.investigationList[this.idInvestigationShow].success = true;
      this.correctionMessage = "Bravo vous avez réussi l'enquete!";
      this.isConductingInvestigation = false;
      this.currentInvestigation = 0;
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
    this.currentInvestigation = 0;
  }
}
