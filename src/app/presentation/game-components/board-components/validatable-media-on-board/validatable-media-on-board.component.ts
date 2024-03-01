// ============================================
//                    Import
// ============================================
import {Component} from '@angular/core';
import {MediaOnBoardComponent} from "../media-on-board/media-on-board.component";

// ============================================
//                Component
// ============================================
@Component({
  selector: 'validatable-media-on-board',
  templateUrl: './validatable-media-on-board.component.html',
  styleUrl: './validatable-media-on-board.component.css'
})
export class ValidatableMediaOnBoardComponent extends MediaOnBoardComponent{

// ============================================
//                Methode
// ============================================

  /**
   *
   */
  mediaIsTruthworthy() : void {
    this.media.userTrustWorthy = true;
    this.dialog.closeAll();
  }

  /**
   *
   */
  mediaIsNotTruthworthy() : void {
    this.media.userTrustWorthy = false;
    this.dialog.closeAll();
  }
}
