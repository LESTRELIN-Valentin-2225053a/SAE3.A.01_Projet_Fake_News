export interface Media {
  id: number;
  description : string;
  trustWorthy : boolean;
  userTrustWorthy? : boolean;
  type: string; // img, video, audio
  link: string;
  picture: string;
  pos : {x : number, y : number};
}
