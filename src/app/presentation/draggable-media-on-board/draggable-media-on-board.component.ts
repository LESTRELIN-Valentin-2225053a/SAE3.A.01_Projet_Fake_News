// ============================================
//                    Import
// ============================================
import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import {CdkDragEnd, DragDropModule, Point} from '@angular/cdk/drag-drop';
import {Media} from "../interfaces/media";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {BoardComponent} from "../board/board.component";
import {MediaOnBoardComponent} from "../media-on-board/media-on-board.component";

// ============================================
//                Component
// ============================================
@Component({
  selector: 'app-draggable-media-on-board',
  standalone: true,
    imports: [DragDropModule, NgIf, NgOptimizedImage],
  templateUrl: './draggable-media-on-board.component.html',
  styleUrl: './draggable-media-on-board.component.css'
})
export class DraggableMediaOnBoardComponent extends MediaOnBoardComponent{

// ============================================
//                Variables
// ============================================

  /**
   *
   */
  @Input('cdkDragBoundary') boundaryElement! : string;

  /**
   *
   */
  @Input() board!: BoardComponent;

  /**
   *
   */
  @Output('cdkDragEnded') dragEndedEvent = new EventEmitter<CdkDragEnd<Media>>();

// ============================================
//                Methods
// ============================================

  /**
   *
   * @param $event
   */
  onDragEnd($event: CdkDragEnd){
    var newMediaPosition: Readonly<Point> = $event.source.getFreeDragPosition();
    this.media.posX = newMediaPosition.x/this.board.width;
    this.media.posY = newMediaPosition.y/this.board.height;
    console.log(this.media.posX,this.media.posY);
    this.dragEndedEvent.emit($event);
  }
}
