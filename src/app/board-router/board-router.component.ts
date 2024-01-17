import {Component, inject} from '@angular/core';
import {SessionService} from "../services/session.service";
import {BoardWithDraggableMediasComponent} from "../board-with-draggable-medias/board-with-draggable-medias.component";
import {NgIf} from "@angular/common";
import {BoardWithValidableMediasComponent} from "../board-with-validable-medias/board-with-validable-medias.component";
import {BoardComponent} from "../board/board.component";

@Component({
  selector: 'app-board-router',
  standalone: true,
  imports: [
    BoardWithDraggableMediasComponent,
    NgIf,
    BoardWithValidableMediasComponent,
    BoardComponent
  ],
  templateUrl: './board-router.component.html',
  styleUrl: './board-router.component.css'
})
export class BoardRouterComponent {
  sessionService : SessionService = inject(SessionService);
  boardType : string = this.sessionService.actualInvestigation.board_type;


  constructor() {
    console.log(this.boardType);
  }
}
