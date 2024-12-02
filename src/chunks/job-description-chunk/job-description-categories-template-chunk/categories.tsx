import React from "react";

function Categories() {
  return (
    <div className="mb-10 ml-4 gap-[24px] flex flex-col ">
      <h1 className="flex font-bold text-3xl mb-2">Categories</h1>

      <div className="flex flex-row gap-[8px]">
        <p className="flex rounded-[80px] p-2 border-[2px] bg-[#fdf7ea] text-[#FFB836] ">
          Marketing
        </p>
        <p className="flex rounded-[80px] p-2 border-[2px] bg-[#d9fcf2] text-[#56CDAD] ">
          Marketing
        </p>
      </div>
    </div>
  );
}

export default Categories;
