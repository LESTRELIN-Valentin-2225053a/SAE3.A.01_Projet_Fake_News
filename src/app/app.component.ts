import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {LeftCornerButtonComponent} from "./presentation/left-corner-button/left-corner-button.component";
import {RightCornerButtonComponent} from "./presentation/right-corner-button/right-corner-button.component";
import {FormLoginComponent} from "./presentation/form-login/form-login.component";
import {SessionService} from "./presentation/services/session.service";
import {InvestigationModel} from "./core/domain/investigation.model";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LeftCornerButtonComponent, RightCornerButtonComponent, FormLoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SAE3.A.01_Projet_Fake_News';
}
