export type MediaType = 'image' | 'video' | 'youtube' | 'pdf' | string; 

export interface MediaItemType {
  type: MediaType;
  url: string;
}
