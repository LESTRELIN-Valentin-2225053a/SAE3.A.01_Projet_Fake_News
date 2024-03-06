import {Component, Input, TemplateRef, ViewChild} from '@angular/core';
import {Dialog} from "@angular/cdk/dialog";
import {MediaModel} from "../../../../core/domain/media.model";

/**
 * Component responsible for displaying media on a board.
 * Allows users to interact with media items and open them in a dialog.
 */
@Component({
  selector: 'media-on-board',
  templateUrl: './media-on-board.component.html',
  styleUrls: ['./media-on-board.component.css']
})
export class MediaOnBoardComponent {

  /** The media item to be displayed on the board. */
  @Input() media!: MediaModel;

  /** Reference to the dialog template used to display media details. */
  @ViewChild('dialog', { read: TemplateRef }) clickedMediaTemplate!: TemplateRef<any>;

  /**
   * Initializes an instance of the MediaOnBoardComponent.
   * @param dialog - The Angular Material dialog service used to open dialogs.
   */
  constructor(public dialog: Dialog) {}

  /**
   * Opens a dialog to display detailed information about the media item.
   */
  openDialog(): void {
    this.dialog.open(this.clickedMediaTemplate, {
      autoFocus: 'false'
    });
  }
}
