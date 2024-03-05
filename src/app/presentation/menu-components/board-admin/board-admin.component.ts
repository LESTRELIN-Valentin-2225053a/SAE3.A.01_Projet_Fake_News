import {Component, EventEmitter, Inject, Output, ViewChild} from '@angular/core';
import {Dialog, DIALOG_DATA} from "@angular/cdk/dialog";
import {MediaModel} from "../../../core/domain/media.model";
import {InvestigationModel} from "../../../core/domain/investigation.model";
import {AdminService} from "../../../core/services/admin.service";
import {MediaService} from "../../../core/services/media.service";
import {MediaLocationModel} from "../../../core/domain/media-location.model";
import {CdkDragEnd, Point} from "@angular/cdk/drag-drop";
import {BoardComponent} from "../../game-components/board-components/board/board.component";

@Component({
  selector: 'board-admin',
  templateUrl: './board-admin.component.html',
  styleUrl: './board-admin.component.css'
})
export class BoardAdminComponent {

  @ViewChild('board') board : BoardComponent;
  @Output('cdkDragEnded') dragEndedEvent = new EventEmitter<CdkDragEnd<MediaModel>>();


  mediaWidthRatio : number = 0.1;
  mediaLocation : MediaLocationModel = { pos:{x:0, y:0} } as MediaLocationModel;

  constructor(public dialog: Dialog,@Inject(DIALOG_DATA) public data: {media : MediaModel, investigation : InvestigationModel},
              private adminService : AdminService,
              private mediaService : MediaService){}

  onDragEnd($event: CdkDragEnd){
    let newMediaPosition: Readonly<Point> = $event.source.getFreeDragPosition();
    this.mediaLocation.pos.x = newMediaPosition.x/this.board.width;
    this.mediaLocation.pos.y = newMediaPosition.y/this.board.height;
    console.log(this.mediaLocation.pos.x,this.mediaLocation.pos.y);
    this.dragEndedEvent.emit($event);
  }
}
