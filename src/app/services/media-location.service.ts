import { Injectable } from '@angular/core';
import {MediaLocation} from "../interfaces/media-location";
import {Media} from "../interfaces/media";
import {Investigation} from "../interfaces/investigation";
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class MediaLocationService {
  getAllMediaLocations(): MediaLocation[] {
    return [];
  }

  getMediaLocationsByInvestigation(investigation : Investigation): MediaLocation[] {
    return [];
  }

  async getMediaLocationsByInvestigationId(investigationId : number){
    return axios.get('http://sae3-a-01-api.alwaysdata.net/api/mediaLocation/id/'+investigationId);
  }
}
