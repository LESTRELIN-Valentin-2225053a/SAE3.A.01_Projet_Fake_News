import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import {CdkDragEnd, Point} from '@angular/cdk/drag-drop';
import {BoardComponent} from "../board/board.component";
import {MediaOnBoardComponent} from "../media-on-board/media-on-board.component";
import {MediaModel} from "../../../../core/domain/media.model";

/**
 * Component that represents a draggable media item on a board.
 * Extends the functionality of the MediaOnBoardComponent to enable dragging.
 */
@Component({
  selector: 'draggable-media-on-board',
  templateUrl: './draggable-media-on-board.component.html',
  styleUrl: './draggable-media-on-board.component.css'
})
export class DraggableMediaOnBoardComponent extends MediaOnBoardComponent{
  /** The element that serves as the boundary for dragging the media item. */
  @Input('cdkDragBoundary') boundaryElement!: string;

  /** The parent board component where the media item is located. */
  @Input() board!: BoardComponent;

  /** Event emitter triggered when dragging of the media item ends. */
  @Output('cdkDragEnded') dragEndedEvent = new EventEmitter<CdkDragEnd<MediaModel>>();

  /**
   * Handles the drag end event of the media item.
   * Calculates the new position of the media item on the board and emits the drag ended event.
   * @param $event - The drag end event containing information about the new position.
   */
  onDragEnd($event: CdkDragEnd){
    var newMediaPosition: Readonly<Point> = $event.source.getFreeDragPosition();
    this.media.pos.x = newMediaPosition.x/this.board.width;
    this.media.pos.y = newMediaPosition.y/this.board.height;
    console.log(this.media.pos.x,this.media.pos.y);
    this.dragEndedEvent.emit($event);
  }
}
