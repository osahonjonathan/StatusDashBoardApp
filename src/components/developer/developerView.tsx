import { useDeveloperTasks } from '../../hooks/useDeveloperTask';
import { useProjects } from '../../hooks/useProject';

import { TaskCard } from './taskCard';

interface DeveloperViewProps {
  developerName: string;
}
const DeveloperView: React.FC<DeveloperViewProps> = ({ developerName }) => {
  const { projects } = useProjects();

  const myTasks = useDeveloperTasks(projects, developerName);

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
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
};
export default DeveloperView;
