import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import {CdkDragEnd, DragDropModule, Point} from '@angular/cdk/drag-drop';
import {Media} from "../media";
import {NgIf} from "@angular/common";
import {BoardComponent} from "../board/board.component";
import {MediaOnBoardComponent} from "../media-on-board/media-on-board.component";


@Component({
  selector: 'app-draggable-media-on-board',
  standalone: true,
  imports: [DragDropModule, NgIf],
  templateUrl: './draggable-media-on-board.component.html',
  styleUrl: './draggable-media-on-board.component.css'
})
export class DraggableMediaOnBoardComponent extends MediaOnBoardComponent{
  @Input('cdkDragBoundary') boundaryElement! : string;
  @Input() board!: BoardComponent;
  @Output('cdkDragEnded') dragEndedEvent = new EventEmitter<CdkDragEnd<Media>>();

  onDragEnd($event: CdkDragEnd){
    var newMediaPosition: Readonly<Point> = $event.source.getFreeDragPosition();
    this.media.pos = {x : newMediaPosition.x/this.board.width, y : newMediaPosition.y/this.board.height };
    this.dragEndedEvent.emit($event);
  }
}
