"use client";

import { alldata } from "@/utils/data/dashboardapplication";
import { useTab } from "@/utils/hooks/useTab";
import { ListItem } from "@/utils/types";
import { useEffect, useRef, useState } from "react";

const useApplicationTemplateChunk = () => {
  const [bgClick, setBgClick] = useState(false);
  const [data, setData] = useState(alldata);
  const [filter, setFilter] = useState("ALL");
  const ITEMS_PER_PAGE = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfFirstItem = (currentPage - 1) * ITEMS_PER_PAGE;
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const [selectedDate, setSelectedDate] = useState("July");
  const dateInputRef = useRef<HTMLInputElement>(null);

  const filterTabs = useTab([
    {
      id: "ALL",
      name: "All",
    },
    {
      id: "REVIEW",
      name: "In Review",
    },
    {
      id: "INTERVIEW",
      name: "Interview",
    },
    {
      id: "ASSESSMENT",
      name: "Assessment",
    },
    {
      id: "OFFERED",
      name: "Offer",
    },
    {
      id: "UNSUITABLE",
      name: "Unsuitable",
    },
  ]);
  const getStatusClass = (status: string) => {
    switch (status) {
      case "review":
        return {
          style: "text-[#FFB836] border-[#FFB836]",
          text: "In Review",
        };
      case "interview":
        return {
          style: "text-[#56CDAD] border-[#56CDAD]",
          text: "Interview",
        };
      case "offered":
        return {
          style: "border-[#0046BF] text-[#0046BF]",
          text: "Offered",
        };
      case "assessment":
        return {
          style: "border-[#26A4FF] text-[#26A4FF]",
          text: "Assessment",
        };
      case "unsuitable":
        return {
          style: "border-[#FF6550] text-[#FF6550]",
          text: "Unsuitable",
        };
    }
  };

  useEffect(() => {
    setData(alldata.slice(indexOfFirstItem, indexOfLastItem));
  }, []);

  const tableHeaders: ListItem[] = [
    {
      id: "id",
      name: "#",
    },
    {
      id: "company",
      name: "Company",
    },
    {
      id: "roles",
      name: "Roles",
    },
    {
      id: "date",
      name: "Dates Applied",
    },
    {
      id: "status",
      name: "Status",
    },
  ];

  const handleBgClick = () => {
    setBgClick(!bgClick);
  };

  const handleImageClick = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker(); // Directly show the calendar
    }
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value); // Update the displayed date
  };

  const handleFilterClick = (tab: ListItem) => {
    if (tab.id !== "ALL") {
      setData(alldata.filter((data) => data.status === tab.id.toLowerCase()));
    } else {
      setData(alldata.slice(indexOfFirstItem, indexOfLastItem));
    }
    filterTabs.handleTabChange(tab);
  };

  return {
    bgClick,
    handleBgClick,
    ITEMS_PER_PAGE,
    currentPage,
    paginate,
    data,
    filter,
    setFilter,
    selectedDate,
    setSelectedDate,
    handleDateChange,
    handleImageClick,
    dateInputRef,
    alldata,
    filterTabs,
    tableHeaders,
    getStatusClass,
    handleFilterClick,
  };
};

export default useApplicationTemplateChunk;
