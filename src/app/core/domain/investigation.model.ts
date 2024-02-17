export interface InvestigationModel {
  title: string;
  description: string;
  board_type : 'DRAGGABLE' | 'VALIDABLE';
  completion: boolean;
}
