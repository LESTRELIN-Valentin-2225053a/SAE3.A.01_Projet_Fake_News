import {Component, ElementRef, EventEmitter, Input, Output} from '@angular/core';
import {CdkDragEnd, DragDropModule, Point} from '@angular/cdk/drag-drop';
import {Media} from "./media";

@Component({
  selector: 'app-media-on-board',
  standalone: true,
  imports: [DragDropModule],
  templateUrl: './media-on-board.component.html',
  styleUrl: './media-on-board.component.css'
})
export class MediaOnBoardComponent{
  @Input() media! : Media;
  @Input('cdkDragBoundary') boundaryElement! : string | ElementRef<HTMLElement> | HTMLElement;
  @Input() board!: HTMLElement;
  @Output('cdkDragEnded') dragEndedEvent = new EventEmitter<CdkDragEnd<Media>>();

  onDragEnd($event: CdkDragEnd){
    var newMediaPosition: Readonly<Point> = $event.source.getFreeDragPosition();
    this.media.pos = {x : newMediaPosition.x/this.board.offsetWidth, y : newMediaPosition.y/this.board.offsetHeight };
    this.dragEndedEvent.emit($event);
  }
}
