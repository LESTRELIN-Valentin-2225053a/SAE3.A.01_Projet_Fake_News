import {Mapper} from "../../../../core/base/mapper";
import {MediaApiEntity} from "./media-api-entity";
import {MediaModel} from "../../../../core/domain/media.model";

/**
 * Maps data between Media API entities and Media domain models.
 * Provides methods to convert from one type to another and vice versa.
 */
export class MediaApiRepositoryMapper extends Mapper<MediaApiEntity, MediaModel>{

  /**
   * Maps a MediaApiEntity object to a MediaModel object.
   * @param param The MediaApiEntity object to map from.
   * @returns The mapped MediaModel object.
   */
  mapFrom(param: MediaApiEntity): MediaModel {
    return {
        id: param.media_id,
        description: param.description,
        trustWorthy: param.isTrustworthy,
        userTrustWorthy: param.userTrustWorthy,
        type: param.type,
        link: param.link,
        picture: param.picture,
        pos: {x: param.posX, y: param.posY},
    };
  }

  /**
   * Maps an array of MediaApiEntity objects to an array of MediaModel objects.
   * @param param The array of MediaApiEntity objects to map from.
   * @returns The mapped array of MediaModel objects.
   */
  mapFromList(param: MediaApiEntity[]): MediaModel[] {
    let mediaModels: MediaModel[] = [];

    param.forEach(mediaApiEntity => {
      mediaModels.push({
        id: mediaApiEntity.media_id,
        description: mediaApiEntity.description,
        trustWorthy: mediaApiEntity.isTrustworthy,
        userTrustWorthy: mediaApiEntity.userTrustWorthy,
        type: mediaApiEntity.type,
        link: mediaApiEntity.link,
        picture: mediaApiEntity.picture,
        pos: {x: mediaApiEntity.posX, y: mediaApiEntity.posY},
      });
    });

    return mediaModels;
  }

  /**
   * Maps a MediaModel object to a MediaApiEntity object.
   * @param param The MediaModel object to map from.
   * @returns The mapped MediaApiEntity object.
   */
  mapTo(param: MediaModel): MediaApiEntity {
    return {
      media_id: param.id,
      description: param.description,
      isTrustworthy: param.trustWorthy,
      userTrustWorthy: param.userTrustWorthy,
      type: param.type,
      link: param.link,
      picture: param.picture,
      posX: param.pos.x,
      posY: param.pos.y
    };
  }

  /**
   * Maps an array of MediaModel objects to an array of MediaApiEntity objects.
   * @param param The array of MediaModel objects to map from.
   * @returns The mapped array of MediaApiEntity objects.
   */
  mapToList(param: MediaModel[]): MediaApiEntity[] {
    let mediaApiEntities: MediaApiEntity[] = [];

    param.forEach(mediaModel => {
      mediaApiEntities.push({
        media_id: mediaModel.id,
        description: mediaModel.description,
        isTrustworthy: mediaModel.trustWorthy,
        userTrustWorthy: mediaModel.userTrustWorthy,
        type: mediaModel.type,
        link: mediaModel.link,
        picture: mediaModel.picture,
        posX: mediaModel.pos.x,
        posY: mediaModel.pos.y
      });
    });

    return mediaApiEntities;
  }

}
