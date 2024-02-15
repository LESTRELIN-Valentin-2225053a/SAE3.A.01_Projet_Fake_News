// ============================================
//                    Import
// ============================================
import { Component} from '@angular/core';
import { BoardComponent } from "../board/board.component";
import {NgIf} from "@angular/common";
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {FormConnexionComponent} from "../form-connexion/form-connexion.component";
import {MatDialog} from "@angular/material/dialog";

// ============================================
//                Component
// ============================================
@Component({
  selector: 'showmenu',
  templateUrl: './menu.component.html',
  imports: [
    BoardComponent,
    NgIf,
    RouterLink,
    RouterOutlet,
  ],
  standalone: true,
  styleUrls: ['./menu.component.css']
})
export class Menu {

// ============================================
//                Variables
// ============================================

  /**
   *   Flag to control the visibility of the content.
   */
  isContentVisible: boolean = false;

// ============================================
//                Methode
// ============================================

  /**
   *   Constructor
   * @param dialog
   * @param router
   */
  constructor(public dialog: MatDialog, private router: Router) {
  }

  /**
   *   Go to the office
   */
  GoToOffice(){
    this.router.navigate(['/office']);
  }

  /**
   *   Go to the tutorial
   */
  GoToTuto(){
    this.router.navigate(['/Tutoriel']);
  }

  /**
   *   Go to the connexion
   */
  GoToConnexion(){
    this.router.navigate(['/connexion']);
  }

  /**
   *   Go to the context
   */
  GoToContext(){
    this.router.navigate(['/context']);
  }

  /**
   * Toggles the visibility of the content.
   * @function toggleContent
   * @returns {void}
   */
  toggleContent(): void {
    this.isContentVisible = !this.isContentVisible;
  }

  /**
   * Handler for content toggle events.
   * @function onContentToggled
   * @returns {void}
   */
  onContentToggled(): void {
    this.isContentVisible = !this.isContentVisible;
  }


  /**
   *
   */
  openDialog(): void {
    const dialogRef = this.dialog.open(FormConnexionComponent, {});
  }

}
