// ============================================
//                    Import
// ============================================
import {Component, inject} from '@angular/core';
import {BoardComponent} from "../board/board.component";
import {Media} from "../interfaces/media";
import {MediaLocation} from "../interfaces/media-location";
import {MediaLocationService} from "../services/media-location.service";
import {CdkDragEnd} from "@angular/cdk/drag-drop";
import {MediaLocationOnBoardComponent} from "../media-location-on-board/media-location-on-board.component";
import {DraggableMediaOnBoardComponent} from "../draggable-media-on-board/draggable-media-on-board.component";
import {NgForOf, NgIf} from "@angular/common";
import {BoardWithMediasComponent} from "../board-with-medias/board-with-medias.component";

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

  /**
   *
   */
  mediaLocations: MediaLocation[] = [];

  /**
   *
   */
  mediaLocationService : MediaLocationService = inject(MediaLocationService);

// ============================================
//                Methods
// ============================================

  /**
   *
   */
  constructor() {
    super();
    this.mediaLocations = this.mediaLocationService.getInitialMediaLocations();
  }

  /**
   *
   * @param $event
   */
  checkIfDraggedOnMediaLocation($event : CdkDragEnd<Media>) {
    var media: Media = $event.source.data;
    this.mediaLocations.forEach(mediaLocation => {
      const hasMediaEnteredMediaLocation: boolean = media.pos.x > mediaLocation.x - this.mediaWidthRatio && media.pos.x < mediaLocation.x + this.mediaWidthRatio
        && media.pos.y > mediaLocation.y - this.mediaHeightRatio && media.pos.y < mediaLocation.y + this.mediaHeightRatio;
      if (hasMediaEnteredMediaLocation && (mediaLocation.media.id == -1 || mediaLocation.media.id == media.id)){
        media.pos = {x : mediaLocation.x, y : mediaLocation.y};
        mediaLocation.media = media;
        $event.source.setFreeDragPosition({x : media.pos.x*this.width, y : media.pos.y*this.height});
      } else if (mediaLocation.media.id == media.id)
        mediaLocation.media = {id : -1} as Media;
    });
  }
}
