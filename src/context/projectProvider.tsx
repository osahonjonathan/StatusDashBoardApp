import { useState, type ReactNode } from 'react';
import type { Project } from '../model/project';
import { initialProjectsData } from '../data';
import { ProjectContext, type ProjectContextType } from './projectContext';

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const [projects, setProjects] = useState<Project[]>(initialProjectsData);

  const updateTask: ProjectContextType['updateTask'] = (
    projectId,
    taskId,
    newStatus,
    newProgress
  ) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              tasks: project.tasks.map((task) =>
                task.id === taskId
                  ? { ...task, status: newStatus, progress: newProgress }
                  : task
              ),
            }
          : project
      )
    );
  };

  const addTask: ProjectContextType['addTask'] = (projectId, newTask) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              tasks: [
                ...project.tasks,
                { ...newTask, id: `task-${Date.now()}` },
              ],
            }
          : project
      )
    );
  };

  const updateMilestoneProgress = (
    projectId: string,
    milestoneId: string,
    newProgress: number
  ) => {
    
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              milestones: project.milestones.map((milestone) =>
                milestone.id === milestoneId
                  ? { ...milestone, progress: newProgress }
                  : milestone
              ),
            }
          : project
      )
    );
    
  };

  return (
    <ProjectContext.Provider
      value={{ projects, updateTask, addTask, updateMilestoneProgress }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
