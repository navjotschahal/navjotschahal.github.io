import { MediaItemType } from './media';

export interface ExperienceType {
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
  media: MediaItemType[];
}
