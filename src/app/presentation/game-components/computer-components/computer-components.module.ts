import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComputerComponent} from "./computer/computer.component";
import {TabComponent} from "./tab/tab.component";
import {CoreModule} from "../../../core/core.module";
import {CdkDrag, CdkDropList} from "@angular/cdk/drag-drop";
import {ComputerComponentsRoutingModule} from "./computer-components-routing.module";
import {GameComponentsModule} from "../game-components.module";


/**
 * Module containing components related to the computer interface.
 * It imports necessary modules for functionality and declares components for use.
 */
@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        ComputerComponentsRoutingModule,
        CdkDropList,
        CdkDrag,
        GameComponentsModule,
    ],
  declarations: [
    ComputerComponent,
    TabComponent
  ]
})
export class ComputerComponentsModule { }
