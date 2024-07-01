import React from "react";

export const IC_Finance = (props: { className?: string }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        d="M2 2V38H38"
        stroke={"#1976D2"}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
      />
      <path
        d="M34 14L24 24L16 16L10 22"
        stroke={"#1976D2"}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
      />
    </svg>
  );
};
