import type { Project } from '../model/project';

export const getProjectHealth = (project: Project) => {
  if (!project.milestones || project.milestones.length === 0) {
    return { status: 'No Milestones', color: 'text-gray-500', progress: 0 };
  }

  const totalProgress = project.milestones.reduce(
    (sum, m) => sum + m.progress,
    0
  );
  const averageProgress = Math.round(totalProgress / project.milestones.length);

  let status = 'At Risk';
  let color = 'text-red-600';

  if (averageProgress === 100) {
    status = 'Delivered';
    color = 'text-green-600';
  } else if (averageProgress >= 75) {
    status = 'On Track';
    color = 'text-blue-600';
  } else if (averageProgress >= 50) {
    status = 'Minor Delays';
    color = 'text-yellow-600';
  }

  return { status, color, progress: averageProgress };
};
