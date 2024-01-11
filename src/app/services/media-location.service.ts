import { Injectable } from '@angular/core';
import {MediaLocation} from "../interfaces/media-location";
import {Media} from "../interfaces/media";

@Injectable({
  providedIn: 'root'
})
export class MediaLocationService {
  initialMediaLocations : MediaLocation[] = [
    {
      x : 0.02,
      y : 0.55,
      media : {id : -1} as Media,
      description : 'Mai 2017 : Photo d\'Emmanuel Macron rencontrant pour la première fois un dirigeant étranger. '
    },
    {
      x : 0.25,
      y : 0.65,
      media : {id : -1} as Media,
      description : '2'
    },
    {
      x : 0.45,
      y : 0.74,
      media : {id : -1} as Media,
      description : '3'
    },
    {
      x : 0.75,
      y : 0.6,
      media : {id : -1} as Media,
      description : '4'
    }
  ];

  getInitialMediaLocations(): MediaLocation[] {
    return this.initialMediaLocations;
  }
}
