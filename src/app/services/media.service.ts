import { Injectable } from '@angular/core';
import {Media} from "../interfaces/media";
import {Investigation} from "../interfaces/investigation";
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  // A FAIRE
  getAllMedias(): Media[] {
    return [];
  }

  async getMediasByInvestigation(investigation : Investigation) {
    return axios.get('http://sae3-a-01-api.alwaysdata.net/api/media/'+investigation.investigation_id);
  }

  async getMediasByInvestigationId(investigationId: number) {
    return axios.get('http://sae3-a-01-api.alwaysdata.net/api/media/'+investigationId);
  }

  getMediasByInvestigationAndUserId(investigation : Investigation,userId : number): Media[] {
    return [];
  }

  getMediasByInvestigationIdAndUserId(investigationId : number,userId : number): Media[] {
    return [];
  }
}
