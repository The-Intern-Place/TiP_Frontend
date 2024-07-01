"use client";

import IC_PaginateLeft from "public/icons/IC_PaginateLeft";
import IC_PaginateRight from "public/icons/IC_PaginateRight";
import React from "react";

interface Props {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  paginate: (_pageNumber: number) => void;
}

const FindjobPagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  paginate,
}: Props) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const pageNumbers: number[] = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  // for thee previous arrow icon
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  // for thee next arrow icon
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
    }
  };

  const getDisplayedPageNumbers = () => {
    if (totalPages <= 4) {
      return pageNumbers;
    }

    if (currentPage <= 3) {
      return [...pageNumbers.slice(0, 3), "...", totalPages];
    }

    if (currentPage > 3 && currentPage < totalPages - 1) {
      return [1, "...", currentPage, "...", totalPages];
    }

    if (currentPage >= totalPages - 1) {
      return [1, "...", ...pageNumbers.slice(totalPages - 3)];
    }

    return pageNumbers;
  };

  const displayedPageNumbers = getDisplayedPageNumbers();

  return (
    <section>
      <div className="flex items-center justify-center w-[100%]">
        <div onClick={handlePreviousPage} className="cursor-pointer">
          <IC_PaginateLeft />
        </div>

        <ul className="flex items-center w-[100%]">
          {displayedPageNumbers.map((number, index) => (
            <li
              key={index}
              className={`rounded-[8px] gap-3 items-center w-[48px] h-[48px] mx-2 ${currentPage === number ? "text-[#fff] bg-[#4640DE]" : ""}`}
            >
              {typeof number === "number" ? (
                <a
                  onClick={() => paginate(number)}
                  className="page-link w-[100%] flex items-center justify-center h-[100%] text-[16px] leading-[25px] font-[600] cursor-pointer font-epilogue"
                >
                  {number}
                </a>
              ) : (
                <span className="w-[100%] flex items-center justify-center h-[100%] text-[16px] leading-[25px] font-[600] cursor-default font-epilogue">
                  {number}
                </span>
              )}
            </li>
          ))}
        </ul>

        <div onClick={handleNextPage} className="cursor-pointer">
          <IC_PaginateRight />
        </div>
      </div>
    </section>
  );
};

export default FindjobPagination;
