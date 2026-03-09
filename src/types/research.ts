import { MediaItemType } from './media';

export interface ResearchType {
  id: number;
  title: string;
  description: string;
  abstract: string;
  tags: string[];
  year: number;
  venue: string;
  paperUrl: string;
  codeUrl: string;
  authors: string[];
  media: MediaItemType[];
}
