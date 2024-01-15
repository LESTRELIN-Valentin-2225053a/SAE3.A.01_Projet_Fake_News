// ============================================
//                    Import
// ============================================
import {Component} from '@angular/core';
import {DraggableMediaOnBoardComponent} from "../draggable-media-on-board/draggable-media-on-board.component";
import {NgForOf, NgIf} from "@angular/common";
import {MediaLocationOnBoardComponent} from "../media-location-on-board/media-location-on-board.component";

// ============================================
//                Component
// ============================================
@Component({
  selector: 'app-board',
  standalone: true,
  imports: [
    DraggableMediaOnBoardComponent,
    NgForOf,
    MediaLocationOnBoardComponent,
    NgIf,
  ],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent{

// ============================================
//                Variables
// ============================================
  /**
   *
   */
  width : number = window.innerWidth*0.75;

  /**
   *
   */
  height : number = window.innerHeight*0.75;
}
