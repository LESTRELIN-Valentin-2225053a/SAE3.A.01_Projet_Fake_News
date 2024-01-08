import { Injectable } from '@angular/core';
import {Media} from "../media";

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  initialMedias: Media[] = [
    {
      id: 0,
      type: 'img',
      link: 'https://i.imgur.com/c3GO3QL.jpg',
      picture: 'https://i.imgur.com/NfQgT5R.png',
      pos: {x: 0.005, y : 0.01}
    },
    {
      id: 1,
      type: 'img',
      link: 'https://imgur.com/yW6Y3Ku.png',
      picture: 'https://imgur.com/yW6Y3Ku.png',
      pos: {x: 0.13, y : 0.06}
    },
    {
      id: 2,
      type: 'img',
      link: 'https://i.imgur.com/jXd0AQS.png',
      picture: 'https://i.imgur.com/jXd0AQS.png',
      pos: {x: 0.256, y : 0.03}
    },
    {
      id: 3,
      type: 'img',
      link: 'https://i.imgur.com/Ij8ySMS.png',
      picture: 'https://i.imgur.com/Ij8ySMS.png',
      pos: {x: 0.5, y : 0.3}
    },
    {
      id: 4,
      type: 'img',
      link: 'https://i.imgur.com/DRwWPS1.png',
      picture: 'https://i.imgur.com/DRwWPS1.png',
      pos: {x: 0.8, y : 0.12}
    },
    {
      id: 5,
      type: 'img',
      link: 'https://i.imgur.com/vlyqcrC.png',
      picture: 'https://i.imgur.com/vlyqcrC.png',
      pos: {x: 0.64, y : 0.1}
    },
    {
      id: 6,
      type: 'img',
      link: 'https://i.imgur.com/VYRltBR.png',
      picture: 'https://i.imgur.com/VYRltBR.png',
      pos: {x: 0.64, y : 0.1}
    }
  ];

  getInitialMedias(): Media[] {
    return this.initialMedias;
  }
}
