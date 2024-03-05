import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GameComponent} from "./game/game.component";
import {LeftCornerButtonComponent} from "./left-corner-button/left-corner-button.component";
import {RightCornerButtonComponent} from "./right-corner-button/right-corner-button.component";
import {RouterLink, RouterOutlet} from "@angular/router";
import {TutorialComponent} from "./tutorial/tutorial.component";



@NgModule({
  declarations: [
    GameComponent,
    LeftCornerButtonComponent,
    RightCornerButtonComponent,
    TutorialComponent,
  ],
  exports: [
    LeftCornerButtonComponent,
    RightCornerButtonComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink
  ]
})
export class GameComponentsModule { }
