import { createContext } from 'react';
import type { Project, Task } from '../model/project';

export interface ProjectContextType {
  projects: Project[];
  updateTask: (
    projectId: string,
    taskId: string,
    newStatus: Task['status'],
    newProgress: number
  ) => void;
  addTask: (projectId: string, newTask: Omit<Task, 'id'>) => void;
  updateMilestoneProgress: (
    projectId: string,
    milestoneId: string,
    newProgress: number
  ) => void;
}

export const ProjectContext = createContext<ProjectContextType | undefined>(
  undefined
);
