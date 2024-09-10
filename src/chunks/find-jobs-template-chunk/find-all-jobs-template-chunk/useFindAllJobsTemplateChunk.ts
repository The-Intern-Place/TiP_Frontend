import { alljobsdata } from "@/utils/data/findjobs";
import { useState } from "react";

type IJobDescription = {
  duration: string;
  jobs: number;
};

type IJobFilter = {
  id: number;
  title: string;
  description: IJobDescription[];
};

export default function useFindAllJobsTemplateChunk() {
  const [iconToggle, setIconToggle] = useState<boolean>(false);
  const [cardType, setCardType] = useState<string | null>(null);
  const [visibleId, setVisibleId] = useState<number[]>([]);
  // pagination
  const ITEMS_PER_PAGE = 7;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfFirstItem = (currentPage - 1) * ITEMS_PER_PAGE;
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const currentjobdata = alljobsdata.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const filterData: IJobFilter[] = [
    {
      id: 1,
      title: "Types of Employment",
      description: [
        { duration: "Full-Time", jobs: 3 },
        { duration: "Part-Time", jobs: 5 },
        { duration: "Remote", jobs: 2 },
        { duration: "Internship", jobs: 24 },
      ],
    },

    {
      id: 2,
      title: "Categories",
      description: [
        { duration: "Design", jobs: 24 },
        { duration: "Sales", jobs: 3 },
        { duration: "Marketing", jobs: 3 },
        { duration: "Business", jobs: 3 },
        { duration: "Human Resources", jobs: 6 },
        { duration: "Finance", jobs: 24 },
        { duration: "Engineering", jobs: 24 },
        { duration: "Technology", jobs: 5 },
      ],
    },

    {
      id: 3,
      title: "Job Level",
      description: [
        { duration: "Enry Level", jobs: 57 },
        { duration: "Mid Level", jobs: 3 },
        { duration: "Internship", jobs: 8 },
      ],
    },

    {
      id: 4,
      title: "Salary Range",
      description: [
        { duration: "$700 - $1000", jobs: 4 },
        { duration: "$100 - $1500", jobs: 6 },
        { duration: "$1500 - $2000", jobs: 10 },
        { duration: "$3000 or above", jobs: 4 },
      ],
    },
  ];

  const handleCardStyleChange = (type: string) => () => {
    setCardType(type);
  };

  const handleToggle = (id: number) => {
    setVisibleId((prevVisibleIds) =>
      prevVisibleIds.includes(id)
        ? prevVisibleIds.filter((visibleId) => visibleId !== id)
        : [...prevVisibleIds, id],
    );
  };

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const [showFilter, setShowFilter] = useState(false);

  const handleFilterToggle = () => {
    setShowFilter(!showFilter);
  };

  return {
    iconToggle,
    cardType,
    visibleId,
    paginate,
    handleCardStyleChange,
    handleToggle,
    currentjobdata,
    setIconToggle,
    currentPage,
    ITEMS_PER_PAGE,
    filterData,
    handleFilterToggle,
    showFilter,
  };
}
