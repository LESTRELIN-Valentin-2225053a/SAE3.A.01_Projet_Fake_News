import {Mapper} from "../../../core/base/mapper";
import {MediaLocationApiEntity} from "./media-location-entity";
import {MediaLocationModel} from "../../../core/domain/media-location.model";
import {MediaModel} from "../../../core/domain/media.model";

export class MediaLocationApiRepositoryMapper extends Mapper<MediaLocationApiEntity, MediaLocationModel>{
  mapFrom(param: MediaLocationApiEntity): MediaLocationModel {
    return {
      id : param.id,
      pos: {x: param.x,y: param.y},
      media : param.media,
      expected_media_id : param.expected_media_id,
      description : param.description
    };
  }

  mapFromList(param: MediaLocationApiEntity[]): MediaLocationModel[] {
    let mediaLocationModels : MediaLocationModel[] = [];

    param.forEach(mediaLocationApiEntity => {
      mediaLocationModels.push({
        id : mediaLocationApiEntity.id,
        pos: {x: mediaLocationApiEntity.x,y: mediaLocationApiEntity.y},
        media : mediaLocationApiEntity.media,
        expected_media_id : mediaLocationApiEntity.expected_media_id,
        description : mediaLocationApiEntity.description
      });
    });

    return mediaLocationModels;
  }

  mapTo(param: MediaLocationModel): MediaLocationApiEntity {
    return {
      id : param.id,
      x: param.pos.x,
      y: param.pos.y,
      media : param.media,
      expected_media_id : param.expected_media_id,
      description : param.description
    };
  }

  mapToList(param: MediaLocationModel[]): MediaLocationApiEntity[] {
    let mediaLocationApiEntities : MediaLocationApiEntity[] = [];

    param.forEach(mediaLocationModels => {
      mediaLocationApiEntities.push({
        id : mediaLocationModels.id,
        x: mediaLocationModels.pos.x,
        y: mediaLocationModels.pos.y,
        media : mediaLocationModels.media,
        expected_media_id : mediaLocationModels.expected_media_id,
        description : mediaLocationModels.description
      });
    });

    return mediaLocationApiEntities;
  }
}
