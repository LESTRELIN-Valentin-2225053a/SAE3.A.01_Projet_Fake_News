import {InvestigationRepository} from "../../../core/repositories/investigation.repository";
import {map, Observable, of} from "rxjs";
import {InvestigationModel} from "../../../core/domain/investigation.model";
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
      .get<InvestigationApiEntity[]>(`${this.apiUrl}/guest/investigation/all`)
      .pipe(map(this.mapper.mapFromList));
  }

  getInvestigationById(id: number): Observable<InvestigationModel> {
    return this.http
      .get<InvestigationApiEntity>(`${this.apiUrl}/guest/investigation/id/${id}`)
      .pipe(map(this.mapper.mapFrom));
  }

  getAllInvestigationsWithSessionId(sessionId: string): Observable<InvestigationModel[]> {
    return of([]);
  }

  getInvestigationByIdWithSessionId(id: number, sessionId: string): Observable<InvestigationModel> {
    return of();
  }

  deleteInvestigation(id: number): Observable<boolean> {
    return this.http.delete(`${this.apiUrl}/admin/investigation/delete/${id}`, { observe: 'response', withCredentials: true }).pipe(
      map(response => response.status === 204));
  }

  newInvestigation(title: string, description: string, explanation: string, board_type: string): Observable<InvestigationModel> {
    console.log(title, description, explanation, board_type);
    return this.http.post<InvestigationApiEntity>(`${this.apiUrl}/admin/investigation/new`, {
      title: title,
      description: description,
      explanation: explanation,
      board_type: board_type
    }, {withCredentials: true}).pipe(map(this.mapper.mapFrom));
  }

  updateInvestigation(id: number, title: string, description: string, explication: string, board_type: string): Observable<InvestigationModel> {
    console.log("caca");
    return this.http.put<InvestigationApiEntity>(`${this.apiUrl}/admin/investigation/update/${id}`, {
      title: title,
      description: description,
      explanation: explication,
      board_type: board_type
    }, {withCredentials: true}).pipe(map(this.mapper.mapFrom));
  }

}
