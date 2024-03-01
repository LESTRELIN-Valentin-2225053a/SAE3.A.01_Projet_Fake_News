import {Mapper} from "../../../../core/base/mapper";
import {MediaApiEntity} from "./media-api-entity";
import {MediaModel} from "../../../../core/domain/media.model";

export class MediaApiRepositoryMapper extends Mapper<MediaApiEntity, MediaModel>{
  mapFrom(param: MediaApiEntity): MediaModel {
    return {
        id: param.id,
        description: param.description,
        trustWorthy: param.trustWorthy,
        userTrustWorthy: param.userTrustWorthy,
        type: param.type,
        link: param.link,
        picture: param.picture,
        pos: {x: param.posX, y: param.posY},
    };
  }

  mapFromList(param: MediaApiEntity[]): MediaModel[] {
    let mediaModels: MediaModel[] = [];

    param.forEach(mediaApiEntity => {
      mediaModels.push({
        id: mediaApiEntity.id,
        description: mediaApiEntity.description,
        trustWorthy: mediaApiEntity.trustWorthy,
        userTrustWorthy: mediaApiEntity.userTrustWorthy,
        type: mediaApiEntity.type,
        link: mediaApiEntity.link,
        picture: mediaApiEntity.picture,
        pos: {x: mediaApiEntity.posX, y: mediaApiEntity.posY},
      });
    });

    return mediaModels;
  }

  mapTo(param: MediaModel): MediaApiEntity {
    return {
      id: param.id,
      description: param.description,
      trustWorthy: param.trustWorthy,
      userTrustWorthy: param.userTrustWorthy,
      type: param.type,
      link: param.link,
      picture: param.picture,
      posX: param.pos.x,
      posY: param.pos.y
    };
  }

  mapToList(param: MediaModel[]): MediaApiEntity[] {
    let mediaApiEntities: MediaApiEntity[] = [];

    param.forEach(mediaModel => {
      mediaApiEntities.push({
        id: mediaModel.id,
        description: mediaModel.description,
        trustWorthy: mediaModel.trustWorthy,
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
