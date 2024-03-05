export interface MediaApiEntity {
  media_id : number;
  description : string;
  isTrustworthy : boolean;
  userTrustWorthy? : boolean;
  type: 'img' | 'video' | 'audio'; // img, video, audio
  link: string;
  picture: string;
  posX : number;
  posY : number;
}
