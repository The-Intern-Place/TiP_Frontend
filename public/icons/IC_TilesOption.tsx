import React from "react";

const IC_TilesOption = ({
  color,
  className,
}: {
  color?: string;
  className?: string;
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color ?? "#1B1B1B"}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g className={className} clip-path="url(#clip0_1664_4597)">
        <path
          d="M9 4H5C4.44772 4 4 4.44772 4 5V9C4 9.55228 4.44772 10 5 10H9C9.55228 10 10 9.55228 10 9V5C10 4.44772 9.55228 4 9 4Z"
          stroke={color ?? "#1B1B1B"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        />
        <path
          d="M19 4H15C14.4477 4 14 4.44772 14 5V9C14 9.55228 14.4477 10 15 10H19C19.5523 10 20 9.55228 20 9V5C20 4.44772 19.5523 4 19 4Z"
          stroke={color ?? "#1B1B1B"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        />
        <path
          d="M9 14H5C4.44772 14 4 14.4477 4 15V19C4 19.5523 4.44772 20 5 20H9C9.55228 20 10 19.5523 10 19V15C10 14.4477 9.55228 14 9 14Z"
          stroke={color ?? "#1B1B1B"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        />
        <path
          d="M19 14H15C14.4477 14 14 14.4477 14 15V19C14 19.5523 14.4477 20 15 20H19C19.5523 20 20 19.5523 20 19V15C20 14.4477 19.5523 14 19 14Z"
          stroke={color ?? "#1B1B1B"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        />
      </g>
      <defs>
        <clipPath id="clip0_1664_4597">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IC_TilesOption;
