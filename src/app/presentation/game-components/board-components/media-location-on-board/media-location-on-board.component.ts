import {Component, Input, TemplateRef, ViewChild} from '@angular/core';
import {Dialog} from "@angular/cdk/dialog";
import {MediaLocationModel} from "../../../../core/domain/media-location.model";

/**
 * Component representing a media location on a board.
 * Displays media location information and provides functionality to open a dialog for additional details.
 */
@Component({
  selector: 'media-location-on-board',
  templateUrl: './media-location-on-board.component.html',
  styleUrls: ['./media-location-on-board.component.css']
})
export class MediaLocationOnBoardComponent {
  /** The media location data to be displayed. */
  @Input() data!: MediaLocationModel;

  /** The ratio of media on the board. */
  @Input() mediaRatio!: number;

  /** Reference to the template to be displayed in the dialog when clicked. */
  @ViewChild(TemplateRef) postItTemplate!: TemplateRef<any>;

  /**
   * Constructs a new instance of the MediaLocationOnBoardComponent.
   * @param dialog - The Angular Material dialog service.
   */
  constructor(public dialog: Dialog) {}

  /**
   * Opens a dialog to display additional details when the media location is clicked.
   */
  openDialog(): void {
    this.dialog.open(this.postItTemplate, {
      autoFocus: 'false',
    });
  }
}
