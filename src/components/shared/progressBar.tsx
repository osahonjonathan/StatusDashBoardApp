import { memo } from 'react';

type ProgressBarProps = {
  progress: number;
  color?: string;
};

export const ProgressBar = memo(
  ({ progress, color = 'bg-green-600' }: ProgressBarProps) => {
    return (
      <div className="w-full bg-gray-200 rounded-full h-2.5 my-2">
        <div
          className={`h-2.5 rounded-full transition-all duration-300 ${color}`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    );
  }
);
