import { memo } from 'react';
import type { Task } from '../../model/project';
import { ProgressBar } from '../shared/progressBar';
import { useProjects } from '../../hooks/useProject';

interface TaskWithProjectName extends Task {
  projectName: string;
  projectId: string;
}

interface TaskCardProps {
  task: TaskWithProjectName;
}

export const TaskCard = memo(({ task }: TaskCardProps) => {
  const { updateTask } = useProjects();
  const handleTaskUpdate = (
    taskId: string,
    projectId: string,
    currentProgress: number,
    direction: 'increase' | 'decrease'
  ) => {
    let newProgress = currentProgress;

    if (direction === 'increase') {
      newProgress = Math.min(currentProgress + 10, 100);
    } else if (direction === 'decrease') {
      newProgress = Math.max(currentProgress - 10, 0);
    }

    const newStatus: Task['status'] =
      newProgress === 100
        ? 'Completed'
        : newProgress === 0
        ? 'Not Started'
        : 'In Progress';

    updateTask(projectId, taskId, newStatus, newProgress);
  };

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold text-blue-800 mb-2">
          {task.name}
        </h3>
        <p className="text-gray-700 text-sm mb-1">
          Project: {task.projectName}
        </p>
        <p className="text-gray-700 text-sm mb-1">
          Status:{' '}
          <span
            className={`font-medium ${
              task.status === 'Completed'
                ? 'text-green-600'
                : task.status === 'In Progress'
                ? 'text-yellow-600'
                : 'text-red-600'
            }`}
          >
            {task.status}
          </span>
        </p>
        <ProgressBar progress={task.progress} color="bg-blue-600" />
        <p className="text-gray-700 text-sm mb-4">Progress: {task.progress}%</p>
      </div>

      <div className="mt-auto flex justify-between items-center gap-2">
        <button
          onClick={() =>
            handleTaskUpdate(task.id, task.projectId, task.progress, 'decrease')
          }
          disabled={task.progress === 0}
          className={`px-3 py-1 rounded-md font-medium transition duration-300 ${
            task.progress === 0
              ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
              : 'bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50'
          }`}
        >
          −
        </button>

        <span className="w-12 text-center font-semibold">{task.progress}%</span>

        <button
          onClick={() =>
            handleTaskUpdate(task.id, task.projectId, task.progress, 'increase')
          }
          disabled={task.progress === 100}
          className={`px-3 py-1 rounded-md font-medium transition duration-300 ${
            task.progress === 100
              ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
          }`}
        >
          +
        </button>
      </div>
    </div>
  );
});
