import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoreModule} from "../../../core/core.module";
import {OfficeComponent} from "./office/office.component";
import {
  BookSelectionInvestigationComponent
} from "./book-selection-investigation/book-selection-investigation.component";
import {RightAnswerComponent} from "./right-answer/right-answer.component";
import {WrongAnswerComponent} from "./wrong-answer/wrong-answer.component";
import {OfficeComponentsRoutingModule} from "./office-components-routing.module";



@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    OfficeComponentsRoutingModule
  ],
  declarations: [
    OfficeComponent,
    RightAnswerComponent,
    WrongAnswerComponent,
    BookSelectionInvestigationComponent
  ]
})
export class OfficeComponentsModule { }
