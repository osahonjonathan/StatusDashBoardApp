import { useState, type FormEvent, memo } from 'react';
import type { Milestone } from '../../model/project';

interface UpdateMilestoneModalProps {
  milestone: Milestone & { projectId: string };
  onClose: () => void;
  updateMilestoneProgress: (
    projectId: string,
    milestoneId: string,
    newProgress: number
  ) => void;
}

export const UpdateMilestoneModal = memo(
  ({
    milestone,
    onClose,
    updateMilestoneProgress,
  }: UpdateMilestoneModalProps) => {
    const [newMilestoneProgress, setNewMilestoneProgress] = useState<number>(
      milestone.progress
    );

    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      updateMilestoneProgress(
        milestone.projectId,
        milestone.id,
        newMilestoneProgress
      );
      onClose();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewMilestoneProgress(parseInt(e.target.value));
    };
    return (
      <div className="fixed inset-0  flex items-center justify-center p-4 z-50 bg-neutral-900/30">
        <div className="bg-white rounded-lg p-6 shadow-xl w-full max-w-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Update Milestone Progress
          </h3>
          <p className="text-gray-700 mb-4">
            Milestone: <span className="font-semibold">{milestone.name}</span>
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="milestoneProgress"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Progress (%)
              </label>
              <input
                type="range"
                id="milestoneProgress"
                min="0"
                max="100"
                step="5"
                value={newMilestoneProgress}
                onChange={handleChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg"
              />
              <div className="text-center text-lg font-bold text-blue-600 mt-2">
                {newMilestoneProgress}%
              </div>
            </div>
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition duration-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
              >
                Update Progress
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
);
