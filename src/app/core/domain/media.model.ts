export interface MediaModel {
  description : string;
  trustWorthy : boolean;
  userTrustWorthy? : boolean;
  type: 'img' | 'video' | 'audio'; // img, video, audio
  link: string;
  picture: string;
  x : number;
  y : number;
}
