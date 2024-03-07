import {Component, EventEmitter, Inject, Output, ViewChild} from '@angular/core';
import {Dialog, DIALOG_DATA} from "@angular/cdk/dialog";
import {AdminService} from "../../../core/services/admin.service";
import {CdkDragEnd, Point} from "@angular/cdk/drag-drop";
import {FormControl, FormGroup} from "@angular/forms";
import {BoardComponent} from "../../game-components/board-components/board/board.component";
import {MediaLocationModel} from "../../../core/domain/media-location.model";
import {InvestigationModel} from "../../../core/domain/investigation.model";
import {MediaModel} from "../../../core/domain/media.model";

/**
 * Component representing the administration board.
 * This component is responsible for managing the positioning and linking of media to investigations.
 */
@Component({
  selector: 'board-admin',
  templateUrl: './board-admin.component.html',
  styleUrl: './board-admin.component.css'
})
export class BoardAdminComponent {

  /** Reference to the board component. */
  @ViewChild('board') board : BoardComponent;

  /** Event emitted when the drag operation ends. */
  @Output('cdkDragEnded') dragEndedEvent = new EventEmitter<CdkDragEnd<MediaModel>>();

  /** Width ratio for media elements on the board. */
  mediaWidthRatio : number = 0.1;

  /** The media item being managed. */
  media : MediaModel;

  /** The location of the media on the board. */
  mediaLocation : MediaLocationModel;

  /** Form group for the media description location. */
  descriptionLocationForm : FormGroup = new FormGroup({
    description: new FormControl(''),
  });

  /**
   * Constructs the BoardAdminComponent.
   * @param dialog - The dialog service for displaying dialogs.
   * @param data - The data passed to the component, containing media and investigation information.
   * @param adminService - The service for administrative actions.
   */
  constructor(public dialog: Dialog,@Inject(DIALOG_DATA) public data: {media : MediaModel, investigation : InvestigationModel},
              private adminService : AdminService){
    this.media = data.media;
    this.media.pos = {x: 0, y: 0};
    this.mediaLocation = {
      pos : {x: 0, y: 0},
      expected_media_id: this.media.id,
      description: ''
    } as MediaLocationModel;
  }

  /**
   * Handles the drag end event.
   * @param $event - The drag end event object.
   */
  onDragEnd($event: CdkDragEnd){
    let newMediaPosition: Readonly<Point> = $event.source.getFreeDragPosition();
    this.mediaLocation.pos.x = newMediaPosition.x/this.board.width;
    this.mediaLocation.pos.y = newMediaPosition.y/this.board.height;
    console.log(this.mediaLocation.pos.x,this.mediaLocation.pos.y);
    this.dragEndedEvent.emit($event);
  }

  /**
   * Links the media to the investigation.
   */
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
