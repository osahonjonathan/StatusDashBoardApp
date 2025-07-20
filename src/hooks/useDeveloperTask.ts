import { useMemo } from 'react';
import type { Project, Task } from '../model/project';

export const useDeveloperTasks = (
  projects: Project[],
  developerName: string
): (Task & { projectName: string; projectId: string })[] => {
  return useMemo(() => {
    return projects.flatMap((project) =>
      project.tasks
        .filter((task) => task.assignedTo === developerName)
        .map((task) => ({
          ...task,
          projectName: project.name,
          projectId: project.id,
        }))
    );
  }, [projects, developerName]);
};
