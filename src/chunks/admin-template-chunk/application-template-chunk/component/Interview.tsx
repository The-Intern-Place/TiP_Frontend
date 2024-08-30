import React from "react";
import useApplicationTemplateChunk from "../useApplicationTemplateChunk";
import Image from "next/image";
import FindjobPagination from "@/components/pagination/FindjobPagination";


const Interview = () => {
  const { ITEMS_PER_PAGE, paginate, currentPage, currentinterviewdata } =
    useApplicationTemplateChunk();

  return (
    <div className="overflow-x-auto flex flex-col bg-[#FAFBFC]">
      <table className="min-w-full bg-transparent border-[1px] border-[#D6DDEB]">
        <thead>
          <tr className="border-[1px] border-[#D6DDEB]">
            <th className="py-2 px-4 border-b h-[88px] text-left font-[600] font-epilogue text-[#202430] text-[16px] leading-[25px] opacity-[50%]">
              #
            </th>
            <th className="py-2 px-4 border-b font-[600] font-epilogue text-[#202430] text-[16px] leading-[25px] h-[88px] text-left opacity-[50%]">
              Company
            </th>
            <th className="py-2 px-2 border-b font-[600] font-epilogue text-[#202430] text-[16px] leading-[25px] h-[88px] text-left opacity-[50%]">
              Roles
            </th>
            <th className="py-2 px-4 border-b font-[600] font-epilogue text-[#202430] text-[16px] leading-[25px] h-[88px] text-left opacity-[50%]">
              Date Applied
            </th>
            <th className="py-2 px-4 border-b font-[600] font-epilogue text-[#202430] text-[16px] leading-[25px] h-[88px] text-left opacity-[50%]">
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          {currentinterviewdata.map((t) => (
            <tr key={t.id} className="border-[1px] border-b">
              <td className="py-2 px-4  h-[88px] font-[400] text-[#25324B] font-epilogue text-[16px] leading-[30px] text-left">
                {t.id}
              </td>
              <td className="py-2 h-[88px] px-4 flex items-center text-[#25324B] font-[400] text-[16px] leading-[30px] text-left">
                <Image
                  src={t.img}
                  alt="searchIcon"
                  className="w-[40px] h-[40px] mr-[8px]"
                />
                {t.company}
              </td>
              <td className="py-2 h-[88px] px-2 font-[400] font-epilogue text-[16px] leading-[30px] text-[#25324B] text-left">
                {t.title}
              </td>
              <td className="py-2 h-[88px] px-4  font-[400] font-epilogue text-[16px] leading-[30px] text-[#25324B] text-left">
                {t.applied}
              </td>
              <td
                className={`py-2 h-[34px] px-4  border-[0px] rounded-[50%] text-[14px] leading-[22px] font-[600] font-epilogue    text-[#56CDAD] w-[107px]  }`}
              >
                <h1 className="border-[#56CDAD] border-[1px] text-[#56CDAD] w-[107px]  h-[34px] rounded-[80px]  text-center flex items-center justify-center">
                  {t.statusInterview}
                </h1>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* pagination */}

      {currentinterviewdata.length > 6 && (
        <div className="flex items-center justify-center my-[3rem]">
          <FindjobPagination
            totalItems={currentinterviewdata.length}
            itemsPerPage={ITEMS_PER_PAGE}
            currentPage={currentPage}
            paginate={paginate}
          />
        </div>
      )}
    </div>
  );
};

export default Interview;
