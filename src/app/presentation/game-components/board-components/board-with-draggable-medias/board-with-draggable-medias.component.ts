// ============================================
//                    Import
// ============================================
import {Component, OnDestroy} from '@angular/core';
import {BoardWithMediasComponent} from "../board-with-medias/board-with-medias.component";
import {MediaLocationModel} from "../../../../core/domain/media-location.model";
import {SessionService} from "../../../../core/services/session.service";
import {CdkDragEnd} from "@angular/cdk/drag-drop";
import {MediaModel} from "../../../../core/domain/media.model";

// ============================================
//                Component
// ============================================
@Component({
  selector: 'board-with-draggable-medias',
  templateUrl: './board-with-draggable-medias.component.html',
  styleUrl: './board-with-draggable-medias.component.css'
})
export class BoardWithDraggableMediasComponent extends BoardWithMediasComponent implements OnDestroy{
// ============================================
//                Variables
// ============================================

  mediaLocations: MediaLocationModel[];

// ============================================
//                Methods
// ============================================


  constructor(sessionService: SessionService) {
    super(sessionService);
  }

  ngOnDestroy(): void {
    console.log(this.medias);
    console.log(this.mediaLocations);
  }

  override ngOnInit() {
    super.ngOnInit();
    this.mediaLocations = this.sessionService.mediaLocations.getValue();
  }

  /**
   *
   * @param $event
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
