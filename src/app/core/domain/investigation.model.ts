export interface InvestigationModel {
  id : number,
  title: string;
  description: string;
  board_type : 'DRAGGABLE' | 'VALIDABLE';
  completion: boolean;
}
