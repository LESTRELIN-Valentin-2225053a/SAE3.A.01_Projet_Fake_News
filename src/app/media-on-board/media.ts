export interface Media {
  id: number;
  type: string; // img, video, audio
  link: string;
  picture: string;
  pos : {x : number, y : number}
}
