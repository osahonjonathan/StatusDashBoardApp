import { SelectBox } from '../shared/selectBox';

interface HeaderProps {
  roles: string[];
  developers: string[];
  selectedRole: string;
  setSelectedRole: (role: string) => void;
  developerName: string;
  setDeveloperName: (name: string) => void;
}

export const Header = ({
  roles,
  developers,
  selectedRole,
  setSelectedRole,
  developerName,
  setDeveloperName,
}: HeaderProps) => {
  return (
    <header className="sticky top-0 bg-white  shadow-md  p-6  flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4 sm:mb-0">
        Project Dashboard
      </h1>
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <SelectBox
          id="role-select"
          label="Select Role"
          value={selectedRole}
          options={roles}
          onChange={setSelectedRole}
        />

        {selectedRole === 'Developer' && (
          <SelectBox
            id="developer-select"
            label="Select Developer"
            value={developerName}
            options={developers}
            onChange={setDeveloperName}
          />
        )}
      </div>
    </header>
  );
};
