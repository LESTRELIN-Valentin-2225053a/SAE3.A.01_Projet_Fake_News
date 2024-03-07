import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {InvestigationRepository} from "./core/repositories/investigation.repository";
import {InvestigationApiRepository} from "./data/repositories/api-repositories/investigation-api-repository/investigation-api.repository";
import {MediaRepository} from "./core/repositories/media.repository";
import {MediaApiRepository} from "./data/repositories/api-repositories/media-api-repository/media-api.repository";
import {MediaLocationRepository} from "./core/repositories/media-location.repository";
import {MediaLocationApiRepository} from "./data/repositories/api-repositories/media-location-api-repository/media-location-api.repository";
import {WebsiteRepository} from "./core/repositories/website.repository";
import {WebsiteApiRepository} from "./data/repositories/api-repositories/website-api-repository/website-api.repository";
import {UserRepository} from "./core/repositories/user.repository";
import {UserApiRepository} from "./data/repositories/api-repositories/user-api-repository/user-api-repository";
import {provideHttpClient} from "@angular/common/http";


export const appConfig: ApplicationConfig = {
  providers: [
    {provide: InvestigationRepository, useClass: InvestigationApiRepository},
    {provide: MediaRepository, useClass: MediaApiRepository},
    {provide: MediaLocationRepository, useClass: MediaLocationApiRepository},
    {provide: WebsiteRepository, useClass: WebsiteApiRepository},
    {provide: UserRepository, useClass: UserApiRepository},
    provideHttpClient(),
    provideRouter(routes)]
};
