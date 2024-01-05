import { Component} from '@angular/core';
import { BoardComponent } from "../board/board.component";
import {NgIf} from "@angular/common";
import {MenuLateralComponent} from "../menu-lateral/menu-lateral.component";

@Component({
  selector: 'showmenu',
  templateUrl: './menu.component.html',
  imports: [
    BoardComponent,
    NgIf,
    MenuLateralComponent
  ],
  standalone: true,
  styleUrls: ['./menu.component.css']
})
export class Afichemenu {
  title = 'SAE3.A.01_Projet_Fake_News';
  showContent: boolean = false;

  toggleContent() {
    this.showContent = !this.showContent;
  }
  onContentToggled(): void {
    this.showContent = !this.showContent;
  }
}
