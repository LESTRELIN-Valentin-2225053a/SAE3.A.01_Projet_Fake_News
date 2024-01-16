import { Injectable } from '@angular/core';
import {MediaLocation} from "../interfaces/media-location";
import {Media} from "../interfaces/media";
import {Investigation} from "../investigation";

@Injectable({
  providedIn: 'root'
})
export class MediaLocationService {
  initialMediaLocations : MediaLocation[] = [
    {
      x : 0.02,
      y : 0.55,
      media : {id : -1} as Media,
      expectedMediaId : 1,
      description : 'Mai 2017 : Photo d\'Emmanuel Macron rencontrant pour la première fois un dirigeant étranger. '
    },
    {
      x : 0.25,
      y : 0.65,
      media : {id : -1} as Media,
      expectedMediaId : 1,
      description : '2'
    },
    {
      x : 0.45,
      y : 0.74,
      media : {id : -1} as Media,
      expectedMediaId : 1,
      description : '3'
    },
    {
      x : 0.65,
      y : 0.6,
      media : {id : -1} as Media,
      expectedMediaId : 1,
      description : '4'
    },
    {
      x : 0.85,
      y : 0.74,
      media : {id : -1} as Media,
      expectedMediaId : 1,
      description : '5'
    }
  ];

  getInitialMediaLocations(): MediaLocation[] {
    return this.initialMediaLocations;
  }

  // A FAIRE
  getAllMediaLocations(): MediaLocation[] {
    return [];
  }

  getMediaLocationsByInvestigation(investigation : Investigation): MediaLocation[] {
    return [];
  }

  // A FAIRE
  getMediaLocationsByInvestigationId(investigationId : number): MediaLocation[] {
    return [];
  }
}
