import {Mapper} from "../../../../core/base/mapper";
import {MediaLocationApiEntity} from "./media-location-api-entity";
import {MediaLocationModel} from "../../../../core/domain/media-location.model";
import {MediaModel} from "../../../../core/domain/media.model";
import {map} from "rxjs";

/**
 * Mapper class for mapping between MediaLocationApiEntity and MediaLocationModel objects.
 * This class provides methods for mapping entities from and to models.
 */
export class MediaLocationApiRepositoryMapper extends Mapper<MediaLocationApiEntity, MediaLocationModel>{

  /**
   * Maps a MediaLocationApiEntity object to a MediaLocationModel object.
   * @param param The MediaLocationApiEntity object to map.
   * @returns The mapped MediaLocationModel object.
   */
  mapFrom(param: MediaLocationApiEntity): MediaLocationModel {
    let media : MediaModel | undefined;
    if (param.media_id !== undefined){
      media = {
        id: param.media_id, // @ts-ignore
        description: param.media_description, // @ts-ignore
        trustWorthy: param.media_isTrustworthy, // @ts-ignore
        type: param.media_type, // @ts-ignore
        link: param.media_link, // @ts-ignore
        picture: param.media_picture,
        pos: {x : param.x, y: param.y}
      }
    }
    return {
      id : param.id,
      pos: {x: param.x,y: param.y},
      expected_media_id : param.expected_media_id,
      media: media,
      description : param.description
    };
  }

  /**
   * Maps an array of MediaLocationApiEntity objects to an array of MediaLocationModel objects.
   * @param param The array of MediaLocationApiEntity objects to map.
   * @returns The mapped array of MediaLocationModel objects.
   */
  mapFromList(param: MediaLocationApiEntity[]): MediaLocationModel[] {
    let mediaLocationModels : MediaLocationModel[] = [];

    param.forEach(mediaLocationApiEntity => {
      let media : MediaModel | undefined;

      if (mediaLocationApiEntity.media_id !== undefined){

        media = {
          id: mediaLocationApiEntity.media_id,  // @ts-ignore
          description: mediaLocationApiEntity.media_description,  // @ts-ignore
          trustWorthy: mediaLocationApiEntity.media_isTrustworthy,  // @ts-ignore
          type: mediaLocationApiEntity.media_type,  // @ts-ignore
          link: mediaLocationApiEntity.media_link,  // @ts-ignore
          picture: mediaLocationApiEntity.media_picture,
          pos: {x : mediaLocationApiEntity.x, y: mediaLocationApiEntity.y}
        }
      }

      mediaLocationModels.push({
        id : mediaLocationApiEntity.id,
        pos: {x: mediaLocationApiEntity.x,y: mediaLocationApiEntity.y},
        media : media,
        expected_media_id : mediaLocationApiEntity.expected_media_id,
        description : mediaLocationApiEntity.description
      });
    });

    return mediaLocationModels;
  }

  /**
   * Maps a MediaLocationModel object to a MediaLocationApiEntity object.
   * @param param The MediaLocationModel object to map.
   * @returns The mapped MediaLocationApiEntity object.
   */
  mapTo(param: MediaLocationModel): MediaLocationApiEntity {
    return {
      id : param.id,
      x: param.pos.x,
      y: param.pos.y,
      expected_media_id : param.expected_media_id,
      media_id: param.media?.id,
      media_description: param.media?.description,
      media_isTrustworthy: param.media?.trustWorthy,
      media_type: param.media?.type,
      media_link: param.media?.link,
      media_picture: param.media?.picture,
      description : param.description
    };
  }

  /**
   * Maps an array of MediaLocationModel objects to an array of MediaLocationApiEntity objects.
   * @param param The array of MediaLocationModel objects to map.
   * @returns The mapped array of MediaLocationApiEntity objects.
   */
  mapToList(param: MediaLocationModel[]): MediaLocationApiEntity[] {
    let mediaLocationApiEntities : MediaLocationApiEntity[] = [];

    param.forEach(mediaLocationModel => {
      mediaLocationApiEntities.push({
        id : mediaLocationModel.id,
        x: mediaLocationModel.pos.x,
        y: mediaLocationModel.pos.y,
        expected_media_id : mediaLocationModel.expected_media_id,
        media_id: mediaLocationModel.media?.id,
        media_description: mediaLocationModel.media?.description,
        media_isTrustworthy: mediaLocationModel.media?.trustWorthy,
        media_type: mediaLocationModel.media?.type,
        media_link: mediaLocationModel.media?.link,
        media_picture: mediaLocationModel.media?.picture,
        description : mediaLocationModel.description,
      });
    });

    return mediaLocationApiEntities;
  }
}
