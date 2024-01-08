import { Injectable } from '@angular/core';
import {MediaLocation} from "../media-location";
import {Media} from "../media";

@Injectable({
  providedIn: 'root'
})
export class MediaLocationService {
  initialMediaLocations : MediaLocation[] = [
    {
      x : 0.02,
      y : 0.55,
      media : {id : -1} as Media,
      description : 'zizi'
    },
    {
      x : 0.25,
      y : 0.65,
      media : {id : -1} as Media,
      description : 'zizi'
    },
    {
      x : 0.45,
      y : 0.74,
      media : {id : -1} as Media,
      description : 'zizi'
    },
    {
      x : 0.75,
      y : 0.6,
      media : {id : -1} as Media,
      description : 'zizi'
    }
  ];

  getInitialMediaLocations(): MediaLocation[] {
    return this.initialMediaLocations;
  }
}
