import { useCallback } from 'react';
import { useDeveloperTasks } from '../../hooks/useDeveloperTask';
import { useProjects } from '../../hooks/useProject';
import type { Task } from '../../model/project';
import { TaskCard } from './taskCard';

interface DeveloperViewProps {
  developerName: string;
}
const DeveloperView: React.FC<DeveloperViewProps> = ({ developerName }) => {
  const { projects, updateTask } = useProjects();

  const myTasks = useDeveloperTasks(projects, developerName);

  const handleTaskUpdate = useCallback(
    (
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
    },
    [updateTask]
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Developer Dashboard - {developerName}
      </h2>
      {myTasks.length === 0 ? (
        <p className="text-gray-600">No tasks assigned to you at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myTasks.map((task) => (
            <TaskCard key={task.id} task={task} onUpdate={handleTaskUpdate} />
          ))}
        </div>
      )}
    </div>
  );
};
export default DeveloperView;
