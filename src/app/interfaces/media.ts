export interface Media {
  id: number;
  description : string;
  trustWorthy : boolean;
  userTrustWorthy? : boolean;
  type: string; // img, video, audio
  link: string;
  picture: string;
  posX : number;
  posY : number;
}
