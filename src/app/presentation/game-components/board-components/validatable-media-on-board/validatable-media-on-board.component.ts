import {Component} from '@angular/core';
import {MediaOnBoardComponent} from "../media-on-board/media-on-board.component";

/**
 * Component that represents a validatable media item on a board.
 * Extends the functionality of the MediaOnBoardComponent to provide validation options.
 */
@Component({
  selector: 'validatable-media-on-board',
  templateUrl: './validatable-media-on-board.component.html',
  styleUrl: './validatable-media-on-board.component.css'
})
export class ValidatableMediaOnBoardComponent extends MediaOnBoardComponent{
  /** Sets the media item as trustworthy and closes the dialog. */
  mediaIsTruthworthy() : void {
    this.media.userTrustWorthy = true;
    this.dialog.closeAll();
  }

  /** Sets the media item as untrustworthy and closes the dialog. */
  mediaIsNotTruthworthy() : void {
    this.media.userTrustWorthy = false;
    this.dialog.closeAll();
  }
}
