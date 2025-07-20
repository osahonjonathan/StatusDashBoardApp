import { lazy, Suspense, useMemo, useState } from 'react';

import { ProjectProvider } from './context/projectProvider';

import { Header } from './components/header/header';
import { Spinner } from './components/shared/spinner';

const DeveloperView = lazy(
  () => import('./components/developer/developerView')
);
const ProjectManagerView = lazy(
  () => import('./components/projectManager/projectManagerView')
);
const ExecutiveView = lazy(
  () => import('./components/executive/executiveView')
);

function App() {
  const [selectedRole, setSelectedRole] = useState<string>('Developer');
  const [developerName, setDeveloperName] = useState<string>('Alice');

  // The values for roles and developers are being memoized to avoid unnecessary re-renders.
  // In a real-life scenario, these values might be fetched from an API or come from a config file.
  // Since we don't want this array to be recreated on every render unless the data itself changes,
  // we use useMemo to keep it stable — especially useful when passed to child components.
  const roles = useMemo(() => ['Developer', 'PM', 'Executive'], []);
  const developers = useMemo(() => ['Alice', 'Bob', 'Charlie'], []);

  return (
    <ProjectProvider>
      <div className="min-h-screen bg-gray-100 font-inter ">
        <Header
          roles={roles}
          developers={developers}
          selectedRole={selectedRole}
          setSelectedRole={setSelectedRole}
          developerName={developerName}
          setDeveloperName={setDeveloperName}
        />

        <main className="mt-3 p-8 ">
          <Suspense fallback={<Spinner />}>
            {selectedRole === 'Developer' && (
              <DeveloperView developerName={developerName} />
            )}
            {selectedRole === 'PM' && <ProjectManagerView />}
            {selectedRole === 'Executive' && <ExecutiveView />}
          </Suspense>
        </main>
      </div>
    </ProjectProvider>
  );
}

export default App;
