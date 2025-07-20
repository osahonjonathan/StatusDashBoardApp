import { useProjects } from '../../hooks/useProject';

import { ProjectCard } from './projectCard';

const ProjectManagerView = () => {
  const { projects, addTask, updateMilestoneProgress } = useProjects();

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Project Manager Dashboard
      </h2>

      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onAddTask={addTask}
          updateMilestoneProgress={updateMilestoneProgress}
        />
      ))}
    </div>
  );
};
export default ProjectManagerView;
