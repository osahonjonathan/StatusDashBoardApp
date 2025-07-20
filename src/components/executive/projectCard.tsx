import { memo, useMemo } from 'react';
import type { Project } from '../../model/project';
import { getMilestoneLabel } from '../../utils/helper';
import { ProgressBar } from '../shared/progressBar';
import { getProjectHealth } from '../../utils/project';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = memo(({ project }: ProjectCardProps) => {
  const { status, color, progress } = useMemo(
    () => getProjectHealth(project),
    [project.milestones]
  );

  return (
    <div className="bg-purple-50 border border-purple-200 rounded-lg p-5 shadow-sm flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold text-purple-800 mb-2">
          {project.name}
        </h3>
        <p className="text-gray-700 text-sm mb-3">{project.description}</p>

        <div className="mb-3">
          <p className="text-gray-700 text-sm font-medium">Overall Progress:</p>
          <ProgressBar progress={progress} color="bg-purple-600" />
          <p className="text-sm text-gray-600 mt-1">{progress}%</p>
        </div>

        <p className="text-gray-700 text-sm font-medium">
          Health Status: <span className={`font-bold ${color}`}>{status}</span>
        </p>
      </div>

      <div className="mt-4">
        <h4 className="text-md font-semibold text-gray-700 mb-2">
          Key Milestones:
        </h4>
        <ul className="list-disc list-inside text-sm text-gray-600">
          {project.milestones.slice(0, 3).map((milestone) => (
            <li key={milestone.id}>
              {milestone.name}: {milestone.progress}% (
              {getMilestoneLabel(milestone.progress)})
            </li>
          ))}
          {project.milestones.length > 3 && (
            <li className="text-gray-500">
              ...and {project.milestones.length - 3} more
            </li>
          )}
        </ul>
      </div>
    </div>
  );
});
