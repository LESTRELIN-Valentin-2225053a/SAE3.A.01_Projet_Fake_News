import {Mapper} from "../../../../core/base/mapper";
import {InvestigationApiEntity} from "./investigation-api-entity";
import {InvestigationModel} from "../../../../core/domain/investigation.model";

/**
 * Mapper class responsible for mapping between InvestigationApiEntity and InvestigationModel.
 * This class facilitates the conversion of data structures between API entities and domain models.
 */
export class InvestigationApiRepositoryMapper extends Mapper<InvestigationApiEntity, InvestigationModel>{
  /**
   * Maps data from an InvestigationApiEntity to an InvestigationModel.
   * @param param The InvestigationApiEntity object to map from.
   * @returns The corresponding InvestigationModel object.
   */
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

  /**
   * Maps data from an InvestigationModel to an InvestigationApiEntity.
   * @param param The InvestigationModel object to map from.
   * @returns The corresponding InvestigationApiEntity object.
   */
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

  /**
   * Maps a list of InvestigationApiEntity objects to an array of InvestigationModel objects.
   * @param param The array of InvestigationApiEntity objects to map from.
   * @returns The array of corresponding InvestigationModel objects.
   */
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

  /**
   * Maps a list of InvestigationModel objects to an array of InvestigationApiEntity objects.
   * @param param The array of InvestigationModel objects to map from.
   * @returns The array of corresponding InvestigationApiEntity objects.
   */
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
