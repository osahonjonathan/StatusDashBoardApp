import React from 'react';
import { useProjectModals } from '../../hooks/useProjectModals';
import type { Milestone } from '../../model/project';
import { getMilestoneLabel } from '../../utils/helper';

import { ProgressBar } from '../shared/progressBar';
import { UpdateMilestoneModal } from '../shared/updateMileStoneModal';

type MilestoneCardProps = {
  milestone: Milestone;
  projectId: string;
};

export const MilestoneCard = React.memo(
  ({ milestone, projectId }: MilestoneCardProps) => {
    const {
      showUpdateMilestoneModal,
      selectedMilestone,
      openUpdateMilestoneModal,
      closeUpdateMilestoneModal,
    } = useProjectModals();

    return (
      <div className="bg-white border border-gray-100 rounded-lg p-3 shadow-sm">
        <p className="font-semibold text-gray-800">{milestone.name}</p>
        <ProgressBar progress={milestone.progress} color="bg-green-600" />

        <p className="text-sm text-gray-600 mb-2">
          Progress: {milestone.progress}% (
          {getMilestoneLabel(milestone.progress)})
        </p>
        <button
          onClick={() => openUpdateMilestoneModal(milestone, projectId)}
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          Update Milestone
        </button>

        {showUpdateMilestoneModal && selectedMilestone && (
          <UpdateMilestoneModal
            milestone={selectedMilestone}
            closeUpdateMilestoneModal={closeUpdateMilestoneModal}
          />
        )}
      </div>
    );
  }
);
