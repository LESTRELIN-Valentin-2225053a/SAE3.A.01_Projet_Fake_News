import {MediaModel} from "./media.model";
import {Media} from "../../presentation/interfaces/media";

export interface MediaLocationModel {
  id : number;
  pos : {x : number; y : number};
  media? : MediaModel;
  expected_media_id : number;
  description : string;
}
