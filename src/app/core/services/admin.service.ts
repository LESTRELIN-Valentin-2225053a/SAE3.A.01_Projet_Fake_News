import {Injectable} from "@angular/core";
import {InvestigationRepository} from "../repositories/investigation.repository";
import {UserRepository} from "../repositories/user.repository";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private investigationRepository: InvestigationRepository,
              private userRepository : UserRepository) {}

  checkAdminStatus(): boolean {
    return this.userRepository.checkAdminStatus();
  }

  blockUser(id: number): boolean {
    return this.userRepository.blockUser(id);
  }

  deleteInvestigation(id: number): boolean {
    return this.investigationRepository.deleteInvestigation(id);
  }

  deleteUser(id: number): boolean {
    return this.userRepository.deleteUser(id);
  }

  newInvestigation(title: string, description: string, explication: string, board_type: string) {
    return this.investigationRepository.newInvestigation(title, description, explication, board_type);
  }

  promoteUser(id: number): boolean {
    return this.userRepository.promoteUser(id);
  }

  unblockUser(id: number): boolean {
    return this.userRepository.unblockUser(id);
  }

  updateInvestigation(id: number, title: string, description: string, explication: string, board_type: string) {
    return this.investigationRepository.updateInvestigation(id, title, description, explication, board_type);
  }

  //TODO : functions of website and media
}
