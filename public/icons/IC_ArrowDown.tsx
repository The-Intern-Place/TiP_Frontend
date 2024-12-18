import React from "react";

const IC_ArrowDown = ({
  className,
  color,
}: {
  className?: string;
  color?: string;
}) => {
  return (
    <svg
      className={className}
      width="12"
      height="7"
      viewBox="0 0 12 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L6 6L11 1"
        stroke="#202020"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IC_ArrowDown;
