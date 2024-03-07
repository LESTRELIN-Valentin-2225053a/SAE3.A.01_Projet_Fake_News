import {Component, EventEmitter, Inject, Output, ViewChild} from '@angular/core';
import {Dialog, DIALOG_DATA} from "@angular/cdk/dialog";
import {AdminService} from "../../../core/services/admin.service";
import {CdkDragEnd, Point} from "@angular/cdk/drag-drop";
import {FormControl, FormGroup} from "@angular/forms";
import {BoardComponent} from "../../game-components/board-components/board/board.component";
import {MediaLocationModel} from "../../../core/domain/media-location.model";
import {MediaService} from "../../../core/services/media.service";
import {InvestigationModel} from "../../../core/domain/investigation.model";
import {MediaModel} from "../../../core/domain/media.model";

@Component({
  selector: 'board-admin',
  templateUrl: './board-admin.component.html',
  styleUrl: './board-admin.component.css'
})
export class BoardAdminComponent {

  @ViewChild('board') board : BoardComponent;
  @Output('cdkDragEnded') dragEndedEvent = new EventEmitter<CdkDragEnd<MediaModel>>();

  mediaWidthRatio : number = 0.1;

  media : MediaModel;
  mediaLocation : MediaLocationModel;

  descriptionLocationForm : FormGroup = new FormGroup({
    description: new FormControl(''),
  });

  constructor(public dialog: Dialog,@Inject(DIALOG_DATA) public data: {media : MediaModel, investigation : InvestigationModel},
              private adminService : AdminService,
              private mediaService : MediaService){
    this.media = data.media;
    this.media.pos = {x: 0, y: 0};
    this.mediaLocation = {
      pos : {x: 0, y: 0},
      expected_media_id: this.media.id,
      description: ''
    } as MediaLocationModel;
  }

  onDragEnd($event: CdkDragEnd){
    let newMediaPosition: Readonly<Point> = $event.source.getFreeDragPosition();
    this.mediaLocation.pos.x = newMediaPosition.x/this.board.width;
    this.mediaLocation.pos.y = newMediaPosition.y/this.board.height;
    console.log(this.mediaLocation.pos.x,this.mediaLocation.pos.y);
    this.dragEndedEvent.emit($event);
  }

  linkMediaToInvestigation(){
    let formData = new FormData();
    formData.append('PosX', this.media.pos.x.toString());
    formData.append('PosY', this.media.pos.y.toString());
    if (this.data.investigation.board_type == 'DRAGGABLE' && this.data.media.trustWorthy){
      // @ts-ignore
      let description = this.descriptionLocationForm.get('description').value;
      formData.append('description', description);
      formData.append('LocationPosX', this.mediaLocation.pos.x.toString());
      formData.append('LocationPosY', this.mediaLocation.pos.y.toString());
    }
    console.log(formData);
    this.adminService.linkMediaToInvestigation(this.data.investigation.id, this.media.id, formData).subscribe(
   () => {
        this.dialog.closeAll();
      }
    );
  }
}
