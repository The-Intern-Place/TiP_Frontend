import React from "react";

function Requiredskills() {
  return (
    <div className="ml-4">
      <h1 className="flex font-bold text-3xl">Required Skills</h1>

      <div className="flex flex-row gap-2 mb-3">
        <p className="flex p-2  bg-[#F8F8FD] text-[#1976D2] ">
          Project Management
        </p>
        <p className="flex p-2  bg-[#F8F8FD] text-[#1976D2] ">Copywriting</p>
      </div>
      <div className="flex flex-row gap-2 mb-3">
        <p className="flex p-2  bg-[#F8F8FD] text-[#1976D2] ">
          Social Media Marketing
        </p>
        <p className="flex p-2  bg-[#F8F8FD] text-[#1976D2] ">English</p>
      </div>
      <div className="flex flex-row gap-2 ">
        <p className="flex p-2  bg-[#F8F8FD] text-[#1976D2] ">Copy Editing</p>
      </div>
    </div>
  );
}

export default Requiredskills;
