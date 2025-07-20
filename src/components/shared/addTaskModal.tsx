import { useState, type FormEvent, memo } from 'react';
import type { Task } from '../../model/project';

interface AddTaskModalProps {
  projectId: string;
  onClose: () => void;
  onAddTask: (projectId: string, newTask: Omit<Task, 'id'>) => void;
}

export const AddTaskModal = memo(
  ({ projectId, onClose, onAddTask }: AddTaskModalProps) => {
    const [newTask, setNewTask] = useState<Omit<Task, 'id'>>({
      projectId: projectId,
      name: '',
      assignedTo: '',
      status: 'Not Started',
      progress: 0,
    });

    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      if (newTask.name && newTask.assignedTo) {
        onAddTask(projectId, newTask);
        onClose();
      } else {
        console.error('Please fill in all task fields.');
        alert('Please fill in all task fields.');
      }
    };

    return (
      <div className="fixed inset-0 flex items-center justify-center p-4 z-50 bg-neutral-900/30">
        <div className="bg-white rounded-lg p-6 shadow-xl w-full max-w-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Add New Task
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="taskName"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Task Name
              </label>
              <input
                type="text"
                id="taskName"
                value={newTask.name}
                onChange={(e) =>
                  setNewTask({ ...newTask, name: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="assignedTo"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Assigned To
              </label>
              <input
                type="text"
                id="assignedTo"
                value={newTask.assignedTo}
                onChange={(e) =>
                  setNewTask({ ...newTask, assignedTo: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
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
                Add Task
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
);
