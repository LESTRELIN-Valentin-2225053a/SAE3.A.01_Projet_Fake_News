import {Component, Input} from '@angular/core';
import {MediaOnBoardComponent} from "../media-on-board/media-on-board.component";
import {NgForOf, NgIf} from "@angular/common";
import {MediaLocationOnBoardComponent} from "../media-location-on-board/media-location-on-board.component";


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
export class BoardComponent{
  @Input() boardWidth! : number;
  @Input() boardHeight! : number;

}
