import {Mapper} from "../../../../core/base/mapper";
import {WebsiteApiEntity} from "./website-api-entity";
import {WebsiteModel} from "../../../../core/domain/website.model";

/**
 * Maps between WebsiteApiEntity objects received from API requests and WebsiteModel objects used in the application.
 */
export class WebsiteApiRepositoryMapper extends Mapper<WebsiteApiEntity, WebsiteModel>{

  /**
   * Maps a single WebsiteApiEntity to a WebsiteModel.
   * @param param The WebsiteApiEntity object to map from.
   * @returns The mapped WebsiteModel object.
   */
  mapFrom(param: WebsiteApiEntity): WebsiteModel {
    return {
      id : param.id,
      title : param.title,
      link : param.link,
      icon : param.icon
    };
  }

  /**
   * Maps a list of WebsiteApiEntity objects to an array of WebsiteModel objects.
   * @param param The array of WebsiteApiEntity objects to map from.
   * @returns The array of mapped WebsiteModel objects.
   */
  mapFromList(param: WebsiteApiEntity[]): WebsiteModel[] {
    let websiteModels: WebsiteModel[] = [];

    param.forEach(websiteApiEntity => {
      websiteModels.push(
        {
          id : websiteApiEntity.id,
          title : websiteApiEntity.title,
          link : websiteApiEntity.link,
          icon : websiteApiEntity.icon
        }
      )
    });

    return websiteModels;
  }

  /**
   * Maps a single WebsiteModel to a WebsiteApiEntity.
   * @param param The WebsiteModel object to map from.
   * @returns The mapped WebsiteApiEntity object.
   */
  mapTo(param: WebsiteModel): WebsiteApiEntity {
    return {
      id : param.id,
      title : param.title,
      link : param.link,
      icon : param.icon
    };
  }

  /**
   * Maps an array of WebsiteModel objects to an array of WebsiteApiEntity objects.
   * @param param The array of WebsiteModel objects to map from.
   * @returns The array of mapped WebsiteApiEntity objects.
   */
  mapToList(param: WebsiteModel[]): WebsiteApiEntity[] {
    let websiteApiEntities: WebsiteApiEntity[] = [];

    param.forEach(websiteModel => {
      websiteApiEntities.push(
        {
          id : websiteModel.id,
          title : websiteModel.title,
          link : websiteModel.link,
          icon : websiteModel.icon
        }
      )
    });

    return websiteApiEntities;
  }
}
