import React from "react";

const IC_Indicator = ({
  className,
  color,
}: {
  className?: string;
  color?: string;
}) => {
  return (
    <svg
      className={className}
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="4.8" height="4.8" rx="4" fill="#E11010" />
    </svg>
  );
};

export default IC_Indicator;
