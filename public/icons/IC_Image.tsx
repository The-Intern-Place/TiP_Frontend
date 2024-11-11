import React from "react";

const IC_Image = ({
  className,
  color,
}: {
  className?: string;
  color?: string;
}) => {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.625 12.25C17.1442 12.25 17.6517 12.096 18.0834 11.8076C18.5151 11.5192 18.8515 11.1092 19.0502 10.6295C19.2489 10.1499 19.3008 9.62209 19.1996 9.11289C19.0983 8.60369 18.8483 8.13596 18.4812 7.76885C18.114 7.40173 17.6463 7.15173 17.1371 7.05044C16.6279 6.94915 16.1001 7.00114 15.6205 7.19982C15.1408 7.3985 14.7308 7.73495 14.4424 8.16663C14.154 8.59831 14 9.10583 14 9.625C14 10.3212 14.2766 10.9889 14.7688 11.4812C15.2611 11.9734 15.9288 12.25 16.625 12.25ZM16.625 8.75C16.7981 8.75 16.9672 8.80132 17.1111 8.89747C17.255 8.99361 17.3672 9.13027 17.4334 9.29015C17.4996 9.45004 17.5169 9.62597 17.4832 9.79571C17.4494 9.96544 17.3661 10.1213 17.2437 10.2437C17.1213 10.3661 16.9654 10.4494 16.7957 10.4832C16.626 10.517 16.45 10.4996 16.2902 10.4334C16.1303 10.3672 15.9936 10.255 15.8975 10.1111C15.8013 9.96723 15.75 9.79806 15.75 9.625C15.75 9.39294 15.8422 9.17038 16.0063 9.00628C16.1704 8.84219 16.3929 8.75 16.625 8.75Z"
        fill="#0046BF"
      />
      <path
        d="M22.75 3.5H5.25C4.78587 3.5 4.34075 3.68437 4.01256 4.01256C3.68437 4.34075 3.5 4.78587 3.5 5.25V22.75C3.5 23.2141 3.68437 23.6592 4.01256 23.9874C4.34075 24.3156 4.78587 24.5 5.25 24.5H22.75C23.2141 24.5 23.6592 24.3156 23.9874 23.9874C24.3156 23.6592 24.5 23.2141 24.5 22.75V5.25C24.5 4.78587 24.3156 4.34075 23.9874 4.01256C23.6592 3.68437 23.2141 3.5 22.75 3.5ZM22.75 22.75H5.25V17.5L9.625 13.125L14.5163 18.0163C14.8441 18.3422 15.2877 18.5251 15.75 18.5251C16.2123 18.5251 16.6559 18.3422 16.9837 18.0163L18.375 16.625L22.75 21V22.75ZM22.75 18.5238L19.6087 15.3825C19.2809 15.0566 18.8373 14.8736 18.375 14.8736C17.9127 14.8736 17.4691 15.0566 17.1413 15.3825L15.75 16.7738L10.8587 11.8825C10.5309 11.5566 10.0873 11.3736 9.625 11.3736C9.16267 11.3736 8.71913 11.5566 8.39125 11.8825L5.25 15.0238V5.25H22.75V18.5238Z"
        fill={color || "#0046BF"}
      />
    </svg>
  );
};

export default IC_Image;
