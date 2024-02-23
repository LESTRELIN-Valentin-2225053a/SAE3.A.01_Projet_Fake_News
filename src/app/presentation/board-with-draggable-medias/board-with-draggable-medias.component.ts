// ============================================
//                    Import
// ============================================
import {Component, OnDestroy} from '@angular/core';
import {BoardComponent} from "../board/board.component";
import {Media} from "../interfaces/media";
import {MediaLocation} from "../interfaces/media-location";
import {CdkDragEnd} from "@angular/cdk/drag-drop";
import {MediaLocationOnBoardComponent} from "../media-location-on-board/media-location-on-board.component";
import {DraggableMediaOnBoardComponent} from "../draggable-media-on-board/draggable-media-on-board.component";
import {NgForOf, NgIf} from "@angular/common";
import {BoardWithMediasComponent} from "../board-with-medias/board-with-medias.component";
import {SessionService} from "../services/session.service";

// ============================================
//                Component
// ============================================
@Component({
  selector: 'app-board-with-draggable-medias',
  standalone: true,
  imports: [
    MediaLocationOnBoardComponent,
    DraggableMediaOnBoardComponent,
    NgForOf,
    NgIf,
    BoardComponent
  ],
  templateUrl: './board-with-draggable-medias.component.html',
  styleUrl: './board-with-draggable-medias.component.css'
})
export class BoardWithDraggableMediasComponent extends BoardWithMediasComponent{
// ============================================
//                Variables
// ============================================

  mediaLocations: MediaLocation[];

// ============================================
//                Methods
// ============================================


  constructor(sessionService: SessionService) {
    super(sessionService);
    this.mediaLocations = sessionService.mediaLocations;
  }

  /**
   *
   * @param $event
   */
  checkIfDraggedOnMediaLocation($event : CdkDragEnd<Media>) {
    let media: Media = $event.source.data;
    this.mediaLocations.forEach(mediaLocation => {
      const hasMediaEnteredMediaLocation: boolean = media.posX > mediaLocation.x - this.mediaWidthRatio && media.posX < mediaLocation.x + this.mediaWidthRatio
        && media.posY > mediaLocation.y - this.mediaHeightRatio && media.posY < mediaLocation.y + this.mediaHeightRatio;
      if (hasMediaEnteredMediaLocation && (mediaLocation.media.id == -1 || mediaLocation.media.id == media.id)){
        media.posX = mediaLocation.x;
        media.posY = mediaLocation.y;
        mediaLocation.media = media;
        $event.source.setFreeDragPosition({x : media.posX*this.width, y : media.posY*this.height});
      } else if (mediaLocation.media.id == media.id)
        mediaLocation.media = {id : -1} as Media;
    });
  }
}
