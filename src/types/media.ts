export type MediaType = 'image' | 'video' | 'youtube' | 'pdf' | string; 

export interface MediaItem {
  type: MediaType;
  url: string;
}
