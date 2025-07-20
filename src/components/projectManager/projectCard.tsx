import { memo, useCallback, useState } from 'react';
import type { Milestone, Project, Task } from '../../model/project';

import { MilestoneCard } from './mileStoneCard';
import { TaskTable } from './taskTable';
import { AddTaskModal } from '../shared/addTaskModal';
import { UpdateMilestoneModal } from '../shared/updateMileStoneModal';

type ProjectCardProps = {
  project: Project;
  onAddTask: (projectId: string, newTask: Omit<Task, 'id'>) => void;

  updateMilestoneProgress: (
    projectId: string,
    milestoneId: string,
    newProgress: number
  ) => void;
};

export const ProjectCard = memo(
  ({ project, onAddTask, updateMilestoneProgress }: ProjectCardProps) => {
    const [showAddTaskModal, setShowAddTaskModal] = useState(false);
    const [selectedProjectIdForTask, setSelectedProjectIdForTask] =
      useState<string>('');

    const [showUpdateMilestoneModal, setShowUpdateMilestoneModal] =
      useState(false);
    const [selectedMilestone, setSelectedMilestone] = useState<
      (Milestone & { projectId: string }) | null
    >(null);

    const handleOpenAddTaskModal = (projectId: string) => {
      setSelectedProjectIdForTask(projectId);
      setShowAddTaskModal(true);
    };

    const handleCloseAddTaskModal = useCallback(() => {
      setShowAddTaskModal(false);
    }, []);

    const handleOpenUpdateMilestoneModal = useCallback(
      (milestone: Milestone, projectId: string) => {
        setSelectedMilestone({ ...milestone, projectId });
        setShowUpdateMilestoneModal(true);
      },
      [setSelectedMilestone, setShowUpdateMilestoneModal]
    );
    const handleCloseUpdateMilestoneModal = useCallback(() => {
      setShowUpdateMilestoneModal(false);
    }, []);
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
                onOpenMilestoneModal={handleOpenUpdateMilestoneModal}
              />
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-medium text-gray-700 mb-3">Tasks</h4>
          <TaskTable tasks={project.tasks} />
        </div>

        <button
          onClick={() => handleOpenAddTaskModal(project.id)}
          className="bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Add New Task to {project.name}
        </button>

        {showAddTaskModal && (
          <AddTaskModal
            projectId={selectedProjectIdForTask}
            onClose={handleCloseAddTaskModal}
            onAddTask={onAddTask}
          />
        )}

        {showUpdateMilestoneModal && selectedMilestone && (
          <UpdateMilestoneModal
            milestone={selectedMilestone}
            onClose={handleCloseUpdateMilestoneModal}
            updateMilestoneProgress={updateMilestoneProgress}
          />
        )}
      </div>
    );
  }
);
