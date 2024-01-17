import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {LeftCornerButtonComponent} from "./left-corner-button/left-corner-button.component";
import {RightCornerButtonComponent} from "./right-corner-button/right-corner-button.component";
import {FormConnexionComponent} from "./form-connexion/form-connexion.component";
import {SessionService} from "./services/session.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LeftCornerButtonComponent, RightCornerButtonComponent, FormConnexionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SAE3.A.01_Projet_Fake_News';
  sessionService: SessionService = inject(SessionService);
}
