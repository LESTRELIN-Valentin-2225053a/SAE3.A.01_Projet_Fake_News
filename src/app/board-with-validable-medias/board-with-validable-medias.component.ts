import { Component } from '@angular/core';
import {BoardComponent} from "../board/board.component";
import {DraggableMediaOnBoardComponent} from "../draggable-media-on-board/draggable-media-on-board.component";
import {MediaLocationOnBoardComponent} from "../media-location-on-board/media-location-on-board.component";
import {NgForOf, NgIf} from "@angular/common";
import {BoardWithMediasComponent} from "../board-with-medias/board-with-medias.component";
import {ValidableMediaOnBoardComponent} from "../validable-media-on-board/validable-media-on-board.component";

@Component({
  selector: 'app-board-with-validable-medias',
  standalone: true,
  imports: [
    BoardComponent,
    DraggableMediaOnBoardComponent,
    MediaLocationOnBoardComponent,
    NgForOf,
    NgIf,
    ValidableMediaOnBoardComponent
  ],
  templateUrl: './board-with-validable-medias.component.html',
  styleUrl: './board-with-validable-medias.component.css'
})
export class BoardWithValidableMediasComponent extends BoardWithMediasComponent{

}
