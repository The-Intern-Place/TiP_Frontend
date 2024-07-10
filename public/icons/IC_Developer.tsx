import React from "react";

const IC_Developer = (props: { className?: string }) => {
  return (
    <svg
      width="44"
      height="36"
      viewBox="0 0 44 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        d="M18 34L26 2M34 10L42 18L34 26M10 26L2 18L10 10"
        stroke="#4640DE"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        className={props.className}
      />
    </svg>
  );
};

export default IC_Developer;
