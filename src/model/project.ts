 export interface Milestone {
  id: string;
  name: string;
  progress: number;
}

export interface Task {
  id: string;
  projectId: string;
  name: string;
  assignedTo: string;
  status: 'Not Started' | 'In Progress' | 'Completed';
  progress: number;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  milestones: Milestone[];
  tasks: Task[];
}
