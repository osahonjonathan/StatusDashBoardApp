import { useProjects } from '../../hooks/useProject';
import { useProjectModals } from '../../hooks/useProjectModals';
import { AddTaskModal } from '../shared/addTaskModal';

import { ProjectCard } from './projectCard';

const ProjectManagerView = () => {
  const { projects } = useProjects();
  const {
    showAddTaskModal,
    selectedProjectIdForTask,
    openAddTaskModal,
    closeAddTaskModal,
  } = useProjectModals();

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Project Manager Dashboard
      </h2>

      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          openAddTaskModal={openAddTaskModal}
        />
      ))}

      {showAddTaskModal && selectedProjectIdForTask && (
        <AddTaskModal
          projectId={selectedProjectIdForTask}
          closeAddTaskModal={closeAddTaskModal}
        />
      )}
    </div>
  );
};
export default ProjectManagerView;
