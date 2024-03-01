import {Mapper} from "../../../../core/base/mapper";
import {UserModel} from "../../../../core/domain/user.model";
import {UserApiEntity} from "./user-api-entity";

export class UserApiRepositoryMapper extends Mapper<UserApiEntity, UserModel>{
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
