export interface Project {
  id: number;
  title: string;
  categories?: ProjectCategory[];
}

export interface ProjectCategory {
  id: number;
  title: string;
  posts?: ProjectPost[];
}

export interface ProjectPost {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}
