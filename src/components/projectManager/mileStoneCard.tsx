import type { Milestone } from '../../model/project';
import { getMilestoneLabel } from '../../utils/helper';

import { ProgressBar } from '../shared/progressBar';

type MilestoneCardProps = {
  milestone: Milestone;
  projectId: string;
  onOpenMilestoneModal: (milestone: Milestone, projectId: string) => void;
};

export const MilestoneCard = ({
  milestone,
  projectId,
  onOpenMilestoneModal,
}: MilestoneCardProps) => {
  return (
    <div className="bg-white border border-gray-100 rounded-lg p-3 shadow-sm">
      <p className="font-semibold text-gray-800">{milestone.name}</p>
      <ProgressBar progress={milestone.progress} color="bg-green-600" />

      <p className="text-sm text-gray-600 mb-2">
        Progress: {milestone.progress}% ({getMilestoneLabel(milestone.progress)}
        )
      </p>
      <button
        onClick={() => onOpenMilestoneModal(milestone, projectId)}
        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
      >
        Update Milestone
      </button>
    </div>
  );
};
