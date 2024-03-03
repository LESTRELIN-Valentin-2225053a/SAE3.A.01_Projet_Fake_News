import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GameComponent} from "./game/game.component";
import {LeftCornerButtonComponent} from "./left-corner-button/left-corner-button.component";
import {RightCornerButtonComponent} from "./right-corner-button/right-corner-button.component";
import {RouterOutlet} from "@angular/router";
import {TutorialComponent} from "./tutorial/tutorial.component";
import {ContextComponent} from "./context/context.component";



@NgModule({
  declarations: [
    GameComponent,
    LeftCornerButtonComponent,
    RightCornerButtonComponent,
    TutorialComponent,
    ContextComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet
  ]
})
export class GameComponentsModule { }
