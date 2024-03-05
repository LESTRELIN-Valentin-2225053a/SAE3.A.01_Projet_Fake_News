import {InvestigationRepository} from "../../../../core/repositories/investigation.repository";
import {catchError, map, Observable, of} from "rxjs";
import {InvestigationModel} from "../../../../core/domain/investigation.model";
import {ApiRepository} from "../api.repository";
import {InvestigationApiRepositoryMapper} from "./investigation-api-repository.mapper";
import {InvestigationApiEntity} from "./investigation-api-entity";
import {Injectable} from "@angular/core";

/**
 * Repository class for handling API requests related to investigations.
 * This class implements the InvestigationRepository interface.
 */
@Injectable({
  providedIn: 'root'
})
export class InvestigationApiRepository extends ApiRepository implements InvestigationRepository{

  /** Mapper instance for mapping between API entities and domain models. */
  mapper = new InvestigationApiRepositoryMapper();

  getAllInvestigations(): Observable<InvestigationModel[]> {
    return this.http
      .get<InvestigationApiEntity[]>(`${this.apiUrl}/guest/investigation/all`)
      .pipe(map(this.mapper.mapFromList));
  }

  getInvestigationById(id: number): Observable<InvestigationModel> {
    return this.http
      .get<InvestigationApiEntity>(`${this.apiUrl}/guest/investigation/${id}`)
      .pipe(map(this.mapper.mapFrom));
  }

  getAllInvestigationsForUser(): Observable<InvestigationModel[]> {
    return this.http
      .get<InvestigationApiEntity[]>(`${this.apiUrl}/user/investigation/all`,{withCredentials: true})
      .pipe(map(this.mapper.mapFromList));
  }

  getInvestigationByIdForUser(id: number): Observable<InvestigationModel> {
    return this.http
      .get<InvestigationApiEntity>(`${this.apiUrl}/user/investigation/${id}`,{withCredentials: true})
      .pipe(map(this.mapper.mapFrom));
  }

  updateCompletionOfInvestigationByIdForUser(id: number): Observable<boolean> {
    return this.http
      .put(`${this.apiUrl}/user/investigation/${id}/complete`,{},{withCredentials: true})
      .pipe(map(() => true),
          catchError(() => { return of(false); }));
  }
}
