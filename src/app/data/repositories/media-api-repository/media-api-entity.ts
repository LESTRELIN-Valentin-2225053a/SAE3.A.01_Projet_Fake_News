export interface MediaApiEntity {
  id : number;
  description : string;
  trustWorthy : boolean;
  userTrustWorthy? : boolean;
  type: 'img' | 'video' | 'audio'; // img, video, audio
  link: string;
  picture: string;
  posX : number;
  posY : number;
}
