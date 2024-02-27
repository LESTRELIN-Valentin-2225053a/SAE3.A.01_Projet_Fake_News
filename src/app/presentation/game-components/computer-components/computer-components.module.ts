import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComputerComponent} from "./computer/computer.component";
import {TabComponent} from "./tab/tab.component";
import {CoreModule} from "../../../core/core.module";
import {CdkDrag, CdkDropList} from "@angular/cdk/drag-drop";
import {ComputerComponentsRoutingModule} from "./computer-components-routing.module";



@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    ComputerComponentsRoutingModule,
    CdkDropList,
    CdkDrag,
  ],
  declarations: [
    ComputerComponent,
    TabComponent
  ]
})
export class ComputerComponentsModule { }
