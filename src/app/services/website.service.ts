import { Injectable } from '@angular/core';
import {Website} from "../website";

@Injectable({
  providedIn: 'root'
})
export class WebsiteService {
  initialWebsites : Website[] = [
    {title : 'Onglet 1', icon : '', link : '/assets/onglet1.html'},
    {title : 'Onglet 2', icon : '', link : '/assets/onglet2.html'}
  ];

  getInitialWebsites(): Website[] {
    return this.initialWebsites;
  }
}
