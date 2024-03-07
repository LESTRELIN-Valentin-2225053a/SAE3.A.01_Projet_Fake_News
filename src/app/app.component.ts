import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {CoreModule} from "./core/core.module";
import {DataModule} from "./data/data.module";
import {InvestigationApiRepository} from "./data/repositories/api-repositories/investigation-api-repository/investigation-api.repository";
import {InvestigationRepository} from "./core/repositories/investigation.repository";
import {InvestigationService} from "./core/services/investigation.service";
import {MediaRepository} from "./core/repositories/media.repository";
import {MediaApiRepository} from "./data/repositories/api-repositories/media-api-repository/media-api.repository";
import {MediaLocationApiRepository} from "./data/repositories/api-repositories/media-location-api-repository/media-location-api.repository";
import {MediaLocationRepository} from "./core/repositories/media-location.repository";
import {WebsiteRepository} from "./core/repositories/website.repository";
import {WebsiteApiRepository} from "./data/repositories/api-repositories/website-api-repository/website-api.repository";
import {MediaService} from "./core/services/media.service";
import {MediaLocationService} from "./core/services/media-location.service";
import {WebsiteService} from "./core/services/website.service";
import {SessionService} from "./core/services/session.service";
import {PresentationModule} from "./presentation/presentation.module";
import {UserRepository} from "./core/repositories/user.repository";
import {UserApiRepository} from "./data/repositories/api-repositories/user-api-repository/user-api-repository";
import {AuthService} from "./core/services/auth.service";
import {AdminService} from "./core/services/admin.service";
import {UserService} from "./core/services/user.service";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
            CoreModule,
            DataModule,
            PresentationModule,
            RouterOutlet],
  providers: [
    {provide: InvestigationRepository, useClass: InvestigationApiRepository},
    InvestigationService,
    {provide: MediaRepository, useClass: MediaApiRepository},
    MediaService,
    {provide: MediaLocationRepository, useClass: MediaLocationApiRepository},
    MediaLocationService,
    {provide: WebsiteRepository, useClass: WebsiteApiRepository},
    WebsiteService,
    {provide: UserRepository, useClass: UserApiRepository},
    UserService,
    AuthService,
    AdminService,
    SessionService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'SAE3.A.01_Projet_Fake_News';

  constructor() {}
}
