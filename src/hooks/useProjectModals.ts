import { useCallback, useState } from 'react';
import type { Milestone } from '../model/project';

export const useProjectModals = () => {
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [selectedProjectIdForTask, setSelectedProjectIdForTask] = useState('');

  const [showUpdateMilestoneModal, setShowUpdateMilestoneModal] =
    useState(false);
  const [selectedMilestone, setSelectedMilestone] = useState<
    (Milestone & { projectId: string }) | null
  >(null);

  const openAddTaskModal = useCallback((projectId: string) => {
    setSelectedProjectIdForTask(projectId);
    setShowAddTaskModal(true);
  }, []);

  const closeAddTaskModal = useCallback(() => {
    setShowAddTaskModal(false);
  }, []);

  const openUpdateMilestoneModal = (
    milestone: Milestone,
    projectId: string
  ) => {
    setSelectedMilestone({ ...milestone, projectId });
    setShowUpdateMilestoneModal(true);
  };

  const closeUpdateMilestoneModal = useCallback(() => {
    setShowUpdateMilestoneModal(false);
  }, []);

  return {
    showAddTaskModal,
    selectedProjectIdForTask,
    openAddTaskModal,
    closeAddTaskModal,

    showUpdateMilestoneModal,
    selectedMilestone,
    openUpdateMilestoneModal,
    closeUpdateMilestoneModal,
  };
};
