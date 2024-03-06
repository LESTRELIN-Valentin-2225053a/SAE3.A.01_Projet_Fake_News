import {Component, OnDestroy} from '@angular/core';
import {BoardWithMediasComponent} from "../board-with-medias/board-with-medias.component";
import {MediaLocationModel} from "../../../../core/domain/media-location.model";
import {SessionService} from "../../../../core/services/session.service";
import {CdkDragEnd} from "@angular/cdk/drag-drop";
import {MediaModel} from "../../../../core/domain/media.model";

/**
 * Component representing a board with draggable media elements.
 * Extends the BoardWithMediasComponent to include functionality for draggable media elements.
 * Manages the positioning of media elements on the board and their interaction with media locations.
 */
@Component({
  selector: 'board-with-draggable-medias',
  templateUrl: './board-with-draggable-medias.component.html',
  styleUrl: './board-with-draggable-medias.component.css'
})
export class BoardWithDraggableMediasComponent extends BoardWithMediasComponent implements OnDestroy{
  /** Array of media locations on the board. */
  mediaLocations: MediaLocationModel[];

  /**
   * Constructs a new instance of the BoardWithDraggableMediasComponent.
   * @param sessionService - The session service for managing user session and related data.
   */
  constructor(sessionService: SessionService) {
    super(sessionService);
  }

  /** Lifecycle hook called when the component is destroyed. */
  ngOnDestroy(): void {
    console.log(this.medias);
    console.log(this.mediaLocations);
  }

  /** Lifecycle hook called after Angular has initialized the component's properties. */
  override ngOnInit(): void {
    super.ngOnInit();
    this.mediaLocations = this.sessionService.mediaLocations.getValue().sort((a, b) => a.pos.x - b.pos.x);
  }

  /**
   * Sorts media locations by their horizontal position.
   * @param a - The first media location model.
   * @param b - The second media location model.
   * @returns A negative, zero, or positive value depending on the comparison result.
   */
  sortByHorizontalPosition(a : MediaLocationModel, b : MediaLocationModel): number {
    return a.pos.x - b.pos.x;
  }

  /**
   * Checks if a media element has been dragged onto a media location on the board.
   * @param $event - The drag event containing information about the dragged media element.
   */
  checkIfDraggedOnMediaLocation($event : CdkDragEnd<MediaModel>) {
    let media: MediaModel = $event.source.data;
    this.mediaLocations.forEach(mediaLocation => {
      const hasMediaEnteredMediaLocation: boolean = media.pos.x > mediaLocation.pos.x - this.mediaWidthRatio && media.pos.x < mediaLocation.pos.x + this.mediaWidthRatio
        && media.pos.y > mediaLocation.pos.y - this.mediaHeightRatio && media.pos.y < mediaLocation.pos.y + this.mediaHeightRatio;
      if (hasMediaEnteredMediaLocation && ( !mediaLocation.media || mediaLocation.media.id == media.id)){
        media.pos.x = mediaLocation.pos.x;
        media.pos.y = mediaLocation.pos.y;
        mediaLocation.media = media;
        $event.source.setFreeDragPosition({x : media.pos.x*this.width, y : media.pos.y*this.height});
      }
      else if (mediaLocation.media && mediaLocation.media.id == media.id)
        mediaLocation.media = undefined;
    });
  }
}
