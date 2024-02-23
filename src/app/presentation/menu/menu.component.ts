// ============================================
//                    Import
// ============================================
import { Component} from '@angular/core';
import { BoardComponent } from "../board/board.component";
import {NgIf} from "@angular/common";
import {RouterLink, RouterOutlet} from "@angular/router";

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
}
