// ============================================
//                    Import
// ============================================
import {AfterContentChecked, Component, inject} from '@angular/core';
import {BoardComponent} from "../board/board.component";
import {Media} from "../interfaces/media";
import {MediaService} from "../services/media.service";

// ============================================
//                Component
// ============================================
@Component({
  selector: 'app-board-with-medias',
  standalone: true,
  imports: [],
  templateUrl: './board-with-medias.component.html',
  styleUrl: './board-with-medias.component.css'
})
export class BoardWithMediasComponent extends BoardComponent implements AfterContentChecked{

// ============================================
//                Variables
// ============================================

  /**
   *
   */
  mediaWidthRatio : number = 0.1;

  /**
   *
   */
  mediaHeightRatio! : number;

  /**
   *
   */
  medias: Media[] = [];

  /**
   *
   */
  mediaService: MediaService = inject(MediaService);

// ============================================
//                Methods
// ============================================

  /**
   *
   */
  constructor() {
    super();
    this.medias = this.mediaService.getInitialMedias();
  }

  /**
   *
   */
  ngAfterContentChecked(): void {
    this.mediaHeightRatio = (this.width/this.height)*this.mediaWidthRatio;
  }
}
