import { MediaItem } from './media';

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  status: string;
  year: number;
  githubUrl: string;
  liveUrl: string;
  highlights: string[];
  media: MediaItem[];
}
