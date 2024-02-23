import {MediaModel} from "../../../core/domain/media.model";

export interface MediaLocationApiEntity {
  id : number;
  x : number;
  y: number;
  media? : MediaModel,
  expected_media_id : number,
  description : string
}
