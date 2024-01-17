import { Injectable } from '@angular/core';
import {Website} from "../interfaces/website";
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class WebsiteService {
  initialWebsites : Website[] = [];

  getInitialWebsites(): Website[] {
    return this.initialWebsites;
  }

  getWebsitesByInvestigationId(investigationID : number){
    return axios.get('http://sae3-a-01-api.alwaysdata.net/api/website/'+investigationID);
  }
}
