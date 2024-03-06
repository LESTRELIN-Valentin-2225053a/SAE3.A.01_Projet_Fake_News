import {Mapper} from "../../../../core/base/mapper";
import {UserModel} from "../../../../core/domain/user.model";
import {UserApiEntity} from "./user-api-entity";

/**
 * Maps between user API entities and user domain models.
 * Converts user data retrieved from API requests to domain models and vice versa.
 */
export class UserApiRepositoryMapper extends Mapper<UserApiEntity, UserModel>{

  /**
   * Maps a single user API entity to a user domain model.
   * @param param The user API entity to map.
   * @returns The mapped user domain model.
   */
  mapFrom(param: UserApiEntity): UserModel {
    return {
      id : param.user_id,
      name : param.name,
      email : param.email,
      isAdmin : param.admin,
      isBlocked : param.blocked,
      created_at : new Date(param.created_at),
      updated_at : new Date(param.updated_at)
    };
  }

  /**
   * Maps a list of user API entities to an array of user domain models.
   * @param param The list of user API entities to map.
   * @returns An array of mapped user domain models.
   */
  mapFromList(param: UserApiEntity[]): UserModel[] {
    let userModels: UserModel[] = [];

    param.forEach(userApiEntity => {
      userModels.push(
        {
          id : userApiEntity.user_id,
          name : userApiEntity.name,
          email : userApiEntity.email,
          isAdmin : userApiEntity.admin,
          isBlocked : userApiEntity.blocked,
          created_at : new Date(userApiEntity.created_at),
          updated_at : new Date(userApiEntity.updated_at)
        }
      )
    });

    return userModels;
  }

  /**
   * Maps a user domain model to a user API entity.
   * @param param The user domain model to map.
   * @returns The mapped user API entity.
   */
  mapTo(param: UserModel): UserApiEntity {
    return {
      user_id : param.id,
      name : param.name,
      email : param.email,
      admin : param.isAdmin,
      blocked : param.isBlocked,
      created_at : param.created_at.toString(),
      updated_at : param.updated_at.toString()
    };
  }

  /**
   * Maps a user domain model to a user API entity.
   * @param param The user domain model to map.
   * @returns The mapped user API entity.
   */
  mapToList(param: UserModel[]): UserApiEntity[] {
    let userApiEntities: UserApiEntity[] = [];

    param.forEach(userModel => {
      userApiEntities.push(
        {
          user_id : userModel.id,
          name : userModel.name,
          email : userModel.email,
          admin : userModel.isAdmin,
          blocked : userModel.isBlocked,
          created_at : userModel.created_at.toString(),
          updated_at : userModel.updated_at.toString()
        }
      )
    });

    return userApiEntities;
  }
}
