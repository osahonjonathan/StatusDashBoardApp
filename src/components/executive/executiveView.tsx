import { useProjects } from '../../hooks/useProject';
import { ProjectCard } from './projectCard';

const ExecutiveView = () => {
  const { projects } = useProjects();

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Executive Dashboard - Project Overview
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};
export default ExecutiveView;
