import {Media} from "./media";

export interface MediaLocation {
  x : number,
  y : number,
  media : Media,
  expected_media_id : number,
  description : string,
  explication : string
}
