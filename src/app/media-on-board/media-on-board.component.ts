import {
  Component,
  EventEmitter,
  Input,
  Output, TemplateRef, ViewChild,
} from '@angular/core';
import {CdkDragEnd, DragDropModule, Point} from '@angular/cdk/drag-drop';
import {Media} from "../media";
import {Dialog} from "@angular/cdk/dialog";
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-media-on-board',
  standalone: true,
  imports: [DragDropModule, NgIf],
  templateUrl: './media-on-board.component.html',
  styleUrl: './media-on-board.component.css'
})
export class MediaOnBoardComponent {
  @Input() media! : Media;
  @Input('cdkDragBoundary') boundaryElement! : string;
  @Input() board!: HTMLElement;
  @Output('cdkDragEnded') dragEndedEvent = new EventEmitter<CdkDragEnd<Media>>();
  @ViewChild(TemplateRef) clickedMediaTemplate!:TemplateRef<any>;

  constructor(public dialog: Dialog) {}

  onDragEnd($event: CdkDragEnd){
    var newMediaPosition: Readonly<Point> = $event.source.getFreeDragPosition();
    this.media.pos = {x : newMediaPosition.x/this.board.offsetWidth, y : newMediaPosition.y/this.board.offsetHeight };
    this.dragEndedEvent.emit($event);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(this.clickedMediaTemplate,{
      autoFocus : 'false',
    });
  }
}
