import {Mapper} from "../../../../core/base/mapper";
import {InvestigationApiEntity} from "./investigation-api-entity";
import {InvestigationModel} from "../../../../core/domain/investigation.model";

export class InvestigationApiRepositoryMapper extends Mapper<InvestigationApiEntity, InvestigationModel>{
  mapFrom(param: InvestigationApiEntity): InvestigationModel {
    return {
      id: param.investigation_id,
      title: param.title,
      description: param.description,
      explanation: param.explanation,
      board_type : param.board_type,
      completion: param.completion
    };
  }

  mapTo(param: InvestigationModel): InvestigationApiEntity {
    return {
      investigation_id: param.id,
      title: param.title,
      description: param.description,
      explanation: param.explanation,
      board_type : param.board_type,
      completion: param.completion
    };
  }

  mapFromList(param: InvestigationApiEntity[]): InvestigationModel[] {
    let investigationModels: InvestigationModel[] = [];

    param.forEach(investigationApiEntity => {
      investigationModels.push(
        {
          id: investigationApiEntity.investigation_id,
          title: investigationApiEntity.title,
          description: investigationApiEntity.description,
          explanation: investigationApiEntity.explanation,
          board_type : investigationApiEntity.board_type,
          completion: investigationApiEntity.completion
        }
      )
    });

    return investigationModels;
  }

  mapToList(param: InvestigationModel[]): InvestigationApiEntity[] {
    let investigationApiEntities: InvestigationApiEntity[] = [];

    param.forEach(investigationModel => {
      investigationApiEntities.push(
        {
          investigation_id: investigationModel.id,
          title: investigationModel.title,
          description: investigationModel.description,
          explanation: investigationModel.explanation,
          board_type : investigationModel.board_type,
          completion: investigationModel.completion
        }
      )
    });

    return investigationApiEntities;
  }
}
