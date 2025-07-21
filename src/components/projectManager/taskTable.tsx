import React from 'react';
import type { Task } from '../../model/project';

type TaskTableProps = {
  tasks: Task[];
};

export const TaskTable = React.memo(({ tasks }: TaskTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">
              Task Name
            </th>
            <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">
              Assigned To
            </th>
            <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">
              Status
            </th>
            <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">
              Progress
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr
              key={task.id}
              className="border-t border-gray-200 hover:bg-gray-50"
            >
              <td className="py-2 px-4 text-sm text-gray-800">{task.name}</td>
              <td className="py-2 px-4 text-sm text-gray-800">
                {task.assignedTo}
              </td>
              <td className="py-2 px-4 text-sm text-gray-800">{task.status}</td>
              <td className="py-2 px-4 text-sm text-gray-800">
                {task.progress}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});
