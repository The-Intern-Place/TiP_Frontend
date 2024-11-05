import React from "react";

interface StatisticsCardProps {
  title: string;
  value: number;
  percentage: string;
}

const StatisticsCard: React.FC<StatisticsCardProps> = ({
  title,
  value,
  percentage,
}) => {
  return (
    <div className="bg-white drop-shadow-[0_0px_2px_#00000040] p-4 rounded-md">
      <div className="flex mb-2">
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-xl sm:text-2xl">{value}</p>

      <p className="mt-4">This week {percentage}</p>
    </div>
  );
};

export default StatisticsCard;
