"use client";

import {
  alldata,
  assesmentdata,
  interviewdata,
  offersdata,
  reviewdata,
  unsuitabledata,
} from "@/utils/data/dashboardapplication";
import { useState } from "react";

const useApplicationTemplateChunk = () => {
  const [bgClick, setBgClick] = useState(false);

  const handleBgClick = () => {
    setBgClick(!bgClick);
  };

  const ITEMS_PER_PAGE = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfFirstItem = (currentPage - 1) * ITEMS_PER_PAGE;
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const currentdata = alldata.slice(indexOfFirstItem, indexOfLastItem);
  const currentreviewdata = reviewdata.slice(indexOfFirstItem, indexOfLastItem);
  const currentinterviewdata = interviewdata.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );
  const currentassesmentdata = assesmentdata.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );
  const currentoffersdata = offersdata.slice(indexOfFirstItem, indexOfLastItem);
  const currentunsuitabledata = unsuitabledata.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const [filter, setFilter] = useState("ALL");

  return {
    bgClick,
    handleBgClick,
    ITEMS_PER_PAGE,
    currentPage,
    paginate,
    currentdata,
    currentassesmentdata,
    currentinterviewdata,
    currentoffersdata,
    currentunsuitabledata,
    currentreviewdata,
    filter,
    setFilter,
  };
};

export default useApplicationTemplateChunk;
