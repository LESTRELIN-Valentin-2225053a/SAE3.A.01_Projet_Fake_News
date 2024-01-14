import {Media} from "./media";

export interface MediaLocation {
  x : number,
  y : number,
  media : Media,
  expectedMediaId : number,
  description : string
}
