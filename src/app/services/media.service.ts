import { Injectable } from '@angular/core';
import {Media} from "../interfaces/media";
import {Investigation} from "../interfaces/investigation";
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  initialMedias: Media[] = [
    {
      id: 0,
      description : "Première rencontre d'Emmanuel Macron avec Donald Trump.",
      trustWorthy : true,
      type: 'img',
      link: 'https://i.imgur.com/c3GO3QL.jpg',
      picture: 'https://i.imgur.com/NfQgT5R.png',
      posX : 0.005,
      posY : 0.01
    },
    {
      id: 1,
      description : "Première rencontre d'Emmanuel Macron avec Kim Jong-Un.",
      trustWorthy : false,
      type: 'img',
      link: 'https://imgur.com/yW6Y3Ku.png',
      picture: 'https://imgur.com/yW6Y3Ku.png',
      posX : 0.13,
      posY : 0.06
    },
    {
      id: 2,
      description : "Emmanuel Macron accompagné de deux personnes de couleur de peau noire",
      trustWorthy : false,
      type: 'img',
      link: 'https://i.imgur.com/jXd0AQS.png',
      picture: 'https://i.imgur.com/jXd0AQS.png',
      posX : 0.256,
      posY : 0.003
    },
    {
      id: 3,
      description : "Emmanuel Macron accompagné de deux personnes de couleur de peau noire",
      trustWorthy : true,
      type: 'img',
      link: 'https://i.imgur.com/Ij8ySMS.png',
      picture: 'https://i.imgur.com/Ij8ySMS.png',
      posX : 0.5,
      posY : 0.3
    },
    {
      id: 4,
      description : "Emmanuel Macron en gilet jaune",
      trustWorthy : true,
      type: 'img',
      link: 'https://i.imgur.com/DRwWPS1.png',
      picture: 'https://i.imgur.com/DRwWPS1.png',
      posX : 0.8,
      posY : 0.12
    },
    {
      id: 5,
      description : "Emmanuel Macron en gilet jaune",
      trustWorthy : false,
      type: 'img',
      link: 'https://i.imgur.com/vlyqcrC.png',
      picture: 'https://i.imgur.com/vlyqcrC.png',
      posX : 0.64,
      posY : 0.1
    },
    {
      id: 6,
      description : "Rencontre d'Emmanuel Macron avec Vladimir Poutine.",
      trustWorthy : false,
      type: 'img',
      link: 'https://i.imgur.com/VYRltBR.png',
      picture: 'https://i.imgur.com/VYRltBR.png',
      posX : 0.52,
      posY : 0.05
    }
  ];

  getInitialMedias(): Media[] {
    return this.initialMedias;
  }

  // A FAIRE
  getAllMedias(): Media[] {
    return [];
  }

  // A FAIRE
  async getMediasByInvestigation(investigation : Investigation) {
    return axios.get('http://sae3-a-01-api.alwaysdata.net/api/media/'+investigation.id);
  }

  // A FAIRE
  async getMediasByInvestigationId(investigationId: number) {
    return axios.get('http://sae3-a-01-api.alwaysdata.net/api/media/'+investigationId);
  }

  // A FAIRE
  getMediasByInvestigationAndUserId(investigation : Investigation,userId : number): Media[] {
    return [];
  }

  // A FAIRE
  getMediasByInvestigationIdAndUserId(investigationId : number,userId : number): Media[] {
    return [];
  }
}
