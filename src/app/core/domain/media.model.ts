export interface MediaModel {
  id: number;
  description : string;
  trustWorthy : boolean;
  userTrustWorthy? : boolean;
  type: 'img' | 'video' | 'audio'; // img, video, audio
  link: string;
  picture: string;
  pos: {x : number; y: number};
}
