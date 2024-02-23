// ============================================
//                    Import
// ============================================
import {AfterContentChecked, Component, inject} from '@angular/core';
import {BoardComponent} from "../board/board.component";
import {SessionService} from "../services/session.service";
import {Media} from "../interfaces/media";

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

  mediaWidthRatio : number = 0.1;

  mediaHeightRatio! : number;

  medias: Media[];

// ============================================
//                Methods
// ============================================

  constructor(public sessionService : SessionService) {
    super();
    this.medias = sessionService.medias;
  }

  ngAfterContentChecked(): void {
    this.mediaHeightRatio = (this.width/this.height)*this.mediaWidthRatio;
  }
}
