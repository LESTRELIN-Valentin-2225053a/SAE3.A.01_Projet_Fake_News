import {Component, Input} from '@angular/core';
import {Media} from "../media-on-board/media";
import {MediaOnBoardComponent} from "../media-on-board/media-on-board.component";
import {NgForOf} from "@angular/common";
import {CdkDragEnd} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [
    MediaOnBoardComponent,
    NgForOf,
  ],
  template: `
    <div #board class="board" [style.width.px]="boardWidth" [style.height.px]="boardHeight">
      <div *ngFor="let position of mediaLocationPositions" [style.width.%]="mediaRatio*100" [style.left.%]="position.x*100" [style.top.%]="position.y*100" class="mediaLocation"></div>
      <app-media-on-board (cdkDragEnded)="checkIfDraggedOnMediaLocation($event)" *ngFor="let media of mediasList"
                          [media]="media"
                          [style.width.%]="mediaRatio*100"
                          [board]="board"
                          cdkDragBoundary=".board">
      </app-media-on-board>
    </div>
  `,
  styleUrl: './board.component.css'
})
export class BoardComponent {
  @Input() mediaRatio! : number;
  @Input() boardWidth! : number;
  @Input() boardHeight! : number;
  mediasList: Media[] = [
    {
      id: 0,
      type: 'img',
      link: 'https://i.imgur.com/CfPPR7j.png',
      picture: 'https://i.imgur.com/CfPPR7j.png',
      pos: {x: 0.12, y : 0}
    },
    {
      id: 1,
      type: 'img',
      link: 'https://i.imgur.com/IGY9qYy.png',
      picture: 'https://i.imgur.com/IGY9qYy.png',
      pos: {x: 0.32, y : 0}
    },
    {
      id: 3,
      type: 'img',
      link: 'https://i.imgur.com/5duWZfA.png',
      picture: 'https://i.imgur.com/5duWZfA.png',
      pos: {x: 0.5, y : 0.3}
    },
    {
      id: 4,
      type: 'img',
      link: 'https://i.imgur.com/9OJ3ff0.png',
      picture: 'https://i.imgur.com/9OJ3ff0.png',
      pos: {x: 0.8, y : 0.12}
    }
  ];

  mediaLocationPositions = [
    {
      x : 0.02,
      y : 0.75
    },
    {
      x : 0.25,
      y : 0.65
    },
    {
       x : 0.45,
       y : 0.74
    },
    {
       x : 0.75,
       y : 0.6
    }
  ]

  checkIfDraggedOnMediaLocation($event : CdkDragEnd<Media>) {
      var media: Media = $event.source.data;
      this.mediaLocationPositions.forEach(position => {
          const heightRatio = (this.boardWidth/this.boardHeight)*this.mediaRatio;
          if (media.pos.x > position.x-this.mediaRatio && media.pos.x < position.x+this.mediaRatio && media.pos.y > position.y-heightRatio && media.pos.y < position.y+heightRatio){
              media.pos = {x : position.x, y : position.y};
              $event.source.setFreeDragPosition({x : media.pos.x*this.boardWidth, y : media.pos.y*this.boardHeight});
          }
      });
  }
}
