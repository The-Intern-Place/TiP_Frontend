import React from "react";

const IC_Search = ({
  className,
  color,
}: {
  className?: string;
  color?: string;
}) => {
  return (
    <>
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M12.4775 22.2734C6.82754 22.2734 2.22754 17.6734 2.22754 12.0234C2.22754 6.37344 6.82754 1.77344 12.4775 1.77344C18.1275 1.77344 22.7275 6.37344 22.7275 12.0234C22.7275 17.6734 18.1275 22.2734 12.4775 22.2734ZM12.4775 3.27344C7.64754 3.27344 3.72754 7.20344 3.72754 12.0234C3.72754 16.8434 7.64754 20.7734 12.4775 20.7734C17.3075 20.7734 21.2275 16.8434 21.2275 12.0234C21.2275 7.20344 17.3075 3.27344 12.4775 3.27344Z"
          fill={color ?? "white"}
        />
        <path
          d="M22.9775 23.2748C22.7875 23.2748 22.5975 23.2048 22.4475 23.0548L20.4475 21.0548C20.1575 20.7648 20.1575 20.2848 20.4475 19.9948C20.7375 19.7048 21.2175 19.7048 21.5075 19.9948L23.5075 21.9948C23.7975 22.2848 23.7975 22.7648 23.5075 23.0548C23.3575 23.2048 23.1675 23.2748 22.9775 23.2748Z"
          fill={color ?? "white"}
        />
      </svg>
    </>
  );
};

export default IC_Search;
