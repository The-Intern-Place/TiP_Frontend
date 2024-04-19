import React from "react";

const IC_Design = (props: { className?: string }) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        d="M18.216 23.516L22.784 18.936L18.676 14.816L16.362 17.13L14.946 15.716L17.25 13.4L13.346 9.49598L8.766 14.076L18.216 23.516ZM33.884 39.196L38.464 34.616L34.562 30.712L32.246 33.016L30.83 31.6L33.134 29.284L29.054 25.216L24.484 29.784L33.884 39.196ZM14.306 40H8V33.692L16.788 24.904L6 14.076L13.346 6.72998L24.224 17.57L34.634 7.14598L40.804 13.492L30.52 23.826L41.27 34.654L33.924 42L23.096 31.212L14.306 40ZM10 38H13.454L33.094 18.374L29.626 14.908L10 34.548V38ZM31.384 16.626L29.626 14.908L33.092 18.374L31.384 16.626Z"
        fill={"#1976D2"}
        className={props.className}
      />
    </svg>
  );
};

export default IC_Design;
