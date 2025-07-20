
export const getMilestoneLabel = (progress: number): string => {
  if (progress === 0) return 'Not Started';
  if (progress > 0 && progress < 100) return 'In Progress';
  if (progress === 100) return 'Delivered';
  return 'Unknown';
};
