export type MediaType = 'image' | 'video' | 'youtube' | 'pdf' | string; 

export interface MediaItemType {
  type: MediaType;
  url: string;
  /** Optional still shown before a video plays and in the thumbnail strip. */
  poster?: string;
}
