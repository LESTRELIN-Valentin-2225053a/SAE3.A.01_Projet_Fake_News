import {AfterViewInit, Component, inject, Input} from '@angular/core';
import {BoardComponent} from "../board/board.component";
import {Media} from "../interfaces/media";
import {MediaService} from "../services/media.service";

@Component({
  selector: 'app-board-with-medias',
  standalone: true,
  imports: [],
  templateUrl: './board-with-medias.component.html',
  styleUrl: './board-with-medias.component.css'
})
export class BoardWithMediasComponent extends BoardComponent implements AfterViewInit{
  @Input() mediaWidthRatio! : number;
  mediaHeightRatio! : number;
  medias: Media[] = [];
  mediaService: MediaService = inject(MediaService);

  constructor() {
    super();
    this.medias = this.mediaService.getInitialMedias();
  }

  ngAfterViewInit(): void {
    this.mediaHeightRatio = (this.width/this.height)*this.mediaWidthRatio;
  }
}
