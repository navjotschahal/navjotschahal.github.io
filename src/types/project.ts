import { MediaItemType } from './media';

export interface ProjectType {
  id: number;
  title: string;
  description: string;
  tags: string[];
  status: string;
  year: number;
  githubUrl: string;
  liveUrl: string;
  highlights: string[];
  media: MediaItemType[];
}
