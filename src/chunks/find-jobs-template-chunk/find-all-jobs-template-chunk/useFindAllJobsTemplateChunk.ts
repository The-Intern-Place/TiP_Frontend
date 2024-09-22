import { alljobsdata } from "@/utils/data/findjobs";
import { useState, useEffect } from "react";

export default function useFindAllJobsTemplateChunk() {
  const [iconToggle, setIconToggle] = useState<boolean>(false);
  const [cardType, setCardType] = useState<string>("card");
  const [visibleId, setVisibleId] = useState<number[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 12;
  const indexOfFirstItem = (currentPage - 1) * ITEMS_PER_PAGE;
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const [currentjobdata, setCurrentJobData] = useState(alljobsdata);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const filterData = [
    {
      id: 1,
      title: "Types of Employment",
      description: [
        { text: "Full-Time", jobs: 3 },
        { text: "Part-Time", jobs: 5 },
        { text: "Remote", jobs: 2 },
        { text: "Internship", jobs: 24 },
      ],
    },
    {
      id: 2,
      title: "Categories",
      description: [
        { text: "Design", jobs: 24 },
        { text: "Sales", jobs: 3 },
        { text: "Marketing", jobs: 3 },
        { text: "Business", jobs: 3 },
        { text: "Human Resources", jobs: 6 },
        { text: "Finance", jobs: 24 },
        { text: "Engineering", jobs: 24 },
        { text: "Technology", jobs: 5 },
      ],
    },
    {
      id: 3,
      title: "Job Level",
      description: [
        { text: "Entry Level", jobs: 57 },
        { text: "Mid Level", jobs: 3 },
        { text: "Internship", jobs: 8 },
      ],
    },
    {
      id: 4,
      title: "Salary Range",
      description: [
        { text: "$700 - $1000", jobs: 4 },
        { text: "$1000 - $1500", jobs: 6 },
        { text: "$1500 - $2000", jobs: 10 },
        { text: "$3000 or above", jobs: 4 },
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

  const [showFilter, setShowFilter] = useState(false);

  const handleFilterToggle = () => {
    setShowFilter((prevShowFilter) => !prevShowFilter);
  };

  const filterJobs = (text: string) => {
    setFilteredJobs((prevFilteredJobs) => {
      const updatedJobs = prevFilteredJobs.includes(text)
        ? prevFilteredJobs.filter((job) => job !== text)
        : [...prevFilteredJobs, text];

      return updatedJobs;
    });
  };

  useEffect(() => {
    if (filteredJobs.length > 0) {
      const filteredData = alljobsdata.filter((job) => {
        return filteredJobs.some(
          (filter) =>
            job.sector1 === filter ||
            job.sector2 === filter ||
            job.duration === filter ||
            job.salaryRange === filter ||
            job.jobLevel === filter,
        );
      });
      setCurrentJobData(filteredData);
    } else {
      setCurrentJobData(alljobsdata);
    }
  }, [filteredJobs]);

  return {
    iconToggle,
    cardType,
    visibleId,
    paginate,
    handleCardStyleChange,
    handleToggle,
    currentjobdata: currentjobdata.slice(indexOfFirstItem, indexOfLastItem),
    setIconToggle,
    currentPage,
    ITEMS_PER_PAGE,
    filterData,
    handleFilterToggle,
    showFilter,
    filterJobs,
  };
}
