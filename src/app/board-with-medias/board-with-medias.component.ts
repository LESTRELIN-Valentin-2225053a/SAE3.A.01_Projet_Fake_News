import {AfterViewInit, Component, inject, Input} from '@angular/core';
import {BoardComponent} from "../board/board.component";
import {Media} from "../media";
import {MediaLocation} from "../media-location";
import {MediaService} from "../services/media.service";
import {MediaLocationService} from "../services/media-location.service";
import {CdkDragEnd} from "@angular/cdk/drag-drop";
import {MediaLocationOnBoardComponent} from "../media-location-on-board/media-location-on-board.component";
import {DraggableMediaOnBoardComponent} from "../draggable-media-on-board/draggable-media-on-board.component";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-board-with-medias',
  standalone: true,
  imports: [
    MediaLocationOnBoardComponent,
    DraggableMediaOnBoardComponent,
    NgForOf,
    NgIf,
    BoardComponent
  ],
  templateUrl: './board-with-medias.component.html',
  styleUrl: './board-with-medias.component.css'
})
export class BoardWithMediasComponent extends BoardComponent implements AfterViewInit{
  @Input() mediaWidthRatio! : number;
  mediaHeightRatio! : number;
  medias: Media[] = [];
  mediaLocations: MediaLocation[] = [];
  mediaService: MediaService = inject(MediaService);
  mediaLocationService : MediaLocationService = inject(MediaLocationService);

  constructor() {
    super();
    this.medias = this.mediaService.getInitialMedias();
    this.mediaLocations = this.mediaLocationService.getInitialMediaLocations();
  }

  ngAfterViewInit(): void {
    this.mediaHeightRatio = (this.width/this.height)*this.mediaWidthRatio;
  }

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
