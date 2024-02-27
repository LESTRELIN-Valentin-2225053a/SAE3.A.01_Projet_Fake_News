import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MediaOnBoardComponent} from "./media-on-board/media-on-board.component";
import {DraggableMediaOnBoardComponent} from "./draggable-media-on-board/draggable-media-on-board.component";
import {CdkDrag} from "@angular/cdk/drag-drop";
import {BoardComponent} from "./board/board.component";
import {ValidatableMediaOnBoardComponent} from "./validatable-media-on-board/validatable-media-on-board.component";
import {BoardWithMediasComponent} from "./board-with-medias/board-with-medias.component";
import {BoardWithDraggableMediasComponent} from "./board-with-draggable-medias/board-with-draggable-medias.component";
import {MediaLocationOnBoardComponent} from "./media-location-on-board/media-location-on-board.component";
import {BoardWithValidatableMediasComponent} from "./board-with-validatable-medias/board-with-validatable-medias.component";
import {BoardForRouterComponent} from "./board-for-router/board-for-router.component";
import {BoardComponentsRoutingModule} from "./board-components-routing.module";

@NgModule({
  imports: [
    CommonModule,
    CdkDrag,
    BoardComponentsRoutingModule
  ],
  declarations: [
    MediaOnBoardComponent,
    DraggableMediaOnBoardComponent,
    ValidatableMediaOnBoardComponent,
    MediaLocationOnBoardComponent,
    BoardComponent,
    BoardWithMediasComponent,
    BoardWithDraggableMediasComponent,
    BoardWithValidatableMediasComponent,
    BoardForRouterComponent
  ]
})
export class BoardComponentsModule { }
