import {Mapper} from "../../../core/base/mapper";
import {WebsiteApiEntity} from "./website-api-entity";
import {WebsiteModel} from "../../../core/domain/website.model";
import {InvestigationModel} from "../../../core/domain/investigation.model";

export class WebsiteApiRepositoryMapper extends Mapper<WebsiteApiEntity, WebsiteModel>{
  mapFrom(param: WebsiteApiEntity): WebsiteModel {
    return {
      id : param.id,
      title : param.title,
      link : param.link,
      icon : param.icon
    };
  }

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

  mapTo(param: WebsiteModel): WebsiteApiEntity {
    return {
      id : param.id,
      title : param.title,
      link : param.link,
      icon : param.icon
    };
  }

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
