import React from 'react';
import type { Project } from '../../model/project';

import { MilestoneCard } from './mileStoneCard';
import { TaskTable } from './taskTable';

type ProjectCardProps = {
  project: Project;
  openAddTaskModal: (projectId: string) => void;
};

export const ProjectCard = React.memo(
  ({ project, openAddTaskModal }: ProjectCardProps) => {
    return (
      <div className="mb-8 p-6 border border-gray-200 rounded-lg bg-gray-50 shadow-sm">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          {project.name}
        </h3>
        <p className="text-gray-600 mb-4">{project.description}</p>

        <div className="mb-6">
          <h4 className="text-xl font-medium text-gray-700 mb-3">Milestones</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.milestones.map((milestone) => (
              <MilestoneCard
                key={milestone.id}
                milestone={milestone}
                projectId={project.id}
              />
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-medium text-gray-700 mb-3">Tasks</h4>
          <TaskTable tasks={project.tasks} />
        </div>

        <button
          onClick={() => openAddTaskModal(project.id)}
          className="bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Add New Task to {project.name}
        </button>
      </div>
    );
  }
);
