export interface MediaLocationApiEntity {
  id : number;
  expected_media_id : number,
  description : string
  x : number;
  y: number;
  media_id?: number,
  media_description?: string,
  media_isTrustworthy?: boolean,
  media_type?: 'img' | 'video' | 'audio',
  media_link?: string,
  media_picture?: string
}
