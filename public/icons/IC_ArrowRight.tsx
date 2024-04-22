import React from "react";

const IC_ArrowRight = (props: {className?: string }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.8375 10.6626C16.6719 10.4848 16.5817 10.2498 16.586 10.0069C16.5903 9.76402 16.6887 9.53229 16.8605 9.36052C17.0322 9.18876 17.264 9.09037 17.5068 9.08608C17.7497 9.0818 17.9848 9.17195 18.1625 9.33755L23.1625 14.3376C23.3381 14.5133 23.4367 14.7516 23.4367 15.0001C23.4367 15.2485 23.3381 15.4868 23.1625 15.6626L18.1625 20.6626C18.0767 20.7547 17.9732 20.8285 17.8582 20.8798C17.7432 20.931 17.619 20.9586 17.4932 20.9608C17.3673 20.963 17.2422 20.9399 17.1255 20.8927C17.0088 20.8456 16.9027 20.7754 16.8137 20.6863C16.7247 20.5973 16.6545 20.4913 16.6073 20.3745C16.5602 20.2578 16.537 20.1328 16.5393 20.0069C16.5415 19.881 16.569 19.7569 16.6203 19.6419C16.6715 19.5269 16.7454 19.4234 16.8375 19.3376L20.2375 15.9376H8.125C7.87636 15.9376 7.6379 15.8388 7.46209 15.663C7.28627 15.4871 7.1875 15.2487 7.1875 15.0001C7.1875 14.7514 7.28627 14.513 7.46209 14.3371C7.6379 14.1613 7.87636 14.0626 8.125 14.0626H20.2375L16.8375 10.6626Z"
        fill="#0046BF"
        className={props.className}
      />
    </svg>
  );
};

export default IC_ArrowRight;