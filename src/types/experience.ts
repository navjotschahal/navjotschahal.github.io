import { MediaItem } from './media';

export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  type: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
  technologies: string[];
  badge?: string;
  media: MediaItem[];
}
