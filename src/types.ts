export interface Article {
  id: string;
  category: string;
  title: string;
  summary: string;
  content: string; // Detailed content for immersive reader view
  author: string;
  date: string;
  readTime: string;
  imageUrl: string;
}

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  description: string;
  details: string;
}

export interface PillarItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Lucide icon reference
}

export interface EventItem {
  id: string;
  title: string;
  type: 'live' | 'palestra' | 'livro' | 'curso';
  dateStr: string;
  description: string;
  status: 'breve' | 'realizado';
}

export interface BookItem {
  id: string;
  title: string;
  author: string;
  description: string;
  coverColor: string; // Visual book cover backdrop
  tags: string[];
}
