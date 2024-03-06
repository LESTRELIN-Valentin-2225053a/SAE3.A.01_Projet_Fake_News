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
import {GameComponentsModule} from "../game-components.module";
import {WaitingScreenComponent} from "./waiting-screen/waiting-screen.component";


/**
 * Module responsible for managing components related to the office feature of the application.
 */
@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        OfficeComponentsRoutingModule,
        GameComponentsModule
    ],
  declarations: [
    OfficeComponent,
    RightAnswerComponent,
    WrongAnswerComponent,
    BookSelectionInvestigationComponent,
    WaitingScreenComponent
  ]
})
export class OfficeComponentsModule { }
