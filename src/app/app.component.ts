import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {BoardComponent} from "./board/board.component";
import {Afichemenu} from "./menu/menu.component";
import {BookSelectionInvestigationComponent} from "./livre-selection-enquetes/book-selection-investigation.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BoardComponent, Afichemenu, BookSelectionInvestigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SAE3.A.01_Projet_Fake_News';
}
