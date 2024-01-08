import {Component, AfterViewInit, Input, inject} from '@angular/core';
import {Media} from "../media";
import {MediaOnBoardComponent} from "../media-on-board/media-on-board.component";
import {NgForOf, NgIf} from "@angular/common";
import {CdkDragEnd} from "@angular/cdk/drag-drop";
import {MediaLocation} from "../media-location";
import {MediaLocationOnBoardComponent} from "../media-location-on-board/media-location-on-board.component";
import {MediaService} from "../services/media.service";
import {MediaLocationService} from "../services/media-location.service";

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [
    MediaOnBoardComponent,
    NgForOf,
    MediaLocationOnBoardComponent,
    NgIf,
  ],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent implements AfterViewInit{
  @Input() mediaWidthRatio! : number;
  @Input() boardWidth! : number;
  @Input() boardHeight! : number;
  mediaHeightRatio! : number;
  medias: Media[] = [];
  mediaLocations: MediaLocation[] = [];
  mediaService: MediaService = inject(MediaService);
  mediaLocationService : MediaLocationService = inject(MediaLocationService);

  constructor() {
    this.medias = this.mediaService.getInitialMedias();
    this.mediaLocations = this.mediaLocationService.getInitialMediaLocations();
  }

  ngAfterViewInit(): void {
    this.mediaHeightRatio = (this.boardWidth/this.boardHeight)*this.mediaWidthRatio;
  }

  checkIfDraggedOnMediaLocation($event : CdkDragEnd<Media>) {
      var media: Media = $event.source.data;
      this.mediaLocations.forEach(mediaLocation => {
        const hasMediaEnteredMediaLocation: boolean = media.pos.x > mediaLocation.x - this.mediaWidthRatio && media.pos.x < mediaLocation.x + this.mediaWidthRatio
          && media.pos.y > mediaLocation.y - this.mediaHeightRatio && media.pos.y < mediaLocation.y + this.mediaHeightRatio;
        if (hasMediaEnteredMediaLocation && (mediaLocation.media.id == -1 || mediaLocation.media.id == media.id)){
              media.pos = {x : mediaLocation.x, y : mediaLocation.y};
              mediaLocation.media = media;
              $event.source.setFreeDragPosition({x : media.pos.x*this.boardWidth, y : media.pos.y*this.boardHeight});
          } else if (mediaLocation.media.id == media.id)
              mediaLocation.media = {id : -1} as Media;
      });
  }
}
