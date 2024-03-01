import {InvestigationRepository} from "../../../../core/repositories/investigation.repository";
import {map, Observable} from "rxjs";
import {InvestigationModel} from "../../../../core/domain/investigation.model";
import {ApiRepository} from "../api.repository";
import {InvestigationApiRepositoryMapper} from "./investigation-api-repository.mapper";
import {InvestigationApiEntity} from "./investigation-api-entity";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class InvestigationApiRepository extends ApiRepository implements InvestigationRepository{
  mapper = new InvestigationApiRepositoryMapper();

  getAllInvestigations(): Observable<InvestigationModel[]> {
    return this.http
      .get<InvestigationApiEntity[]>(`${this.apiUrl}/api/guest/investigation/all`)
      .pipe(map(this.mapper.mapFromList));
  }

  getInvestigationById(id: number): Observable<InvestigationModel> {
    return this.http
      .get<InvestigationApiEntity>(`${this.apiUrl}/api/guest/investigation/${id}`)
      .pipe(map(this.mapper.mapFrom));
  }

  getAllInvestigationsWithUserId(userId: number): Observable<InvestigationModel[]> {
    return this.http
      .get<InvestigationApiEntity[]>(`${this.apiUrl}/api/${userId}/investigation/all`)
      .pipe(map(this.mapper.mapFromList));
  }

  getInvestigationByIdWithUserId(id: number, userId: number): Observable<InvestigationModel> {
    return this.http
      .get<InvestigationApiEntity>(`${this.apiUrl}/api/${userId}/investigation/${id}`)
      .pipe(map(this.mapper.mapFrom));
  }

}
