export interface InvestigationModel {
  id : number,
  title: string;
  description: string;
  explanation: string;
  board_type : 'DRAGGABLE' | 'VALIDABLE';
  completion: boolean;
}
