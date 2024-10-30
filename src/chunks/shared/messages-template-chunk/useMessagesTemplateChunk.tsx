// import React from 'react'
import { ListItem } from "@/utils/types";
import {
  ApplicationSent,
  JobOpening,
  InterviewSchedule,
  IM_Meta,
  IM_GreenHouse,
  IM_CannyCo,
  IM_HuntingInc,
} from "@assets/images";

function useMessagesTemplateChunk() {
  const user = true;
  const stats: ListItem[] = [
    {
      name: "Applications Sent",
      id: "20",
      image: ApplicationSent,
    },
    {
      name: "Job Opening",
      id: "185",
      image: JobOpening,
    },
    {
      name: "Interview Schedule",
      id: "10",
      image: InterviewSchedule,
    },
  ];
  const featuredJobs: ListItem[] = [
    {
      id: "1",
      name: "Meta",
      value: 20,
      image: IM_Meta,
    },
    {
      id: "2",
      name: "GreenHouse",
      value: 15,
      image: IM_GreenHouse,
    },
    {
      id: "3",
      name: "Canny.co",
      value: 10,
      image: IM_CannyCo,
    },
    {
      id: "4",
      name: "Hunting Inc",
      value: 10,
      image: IM_HuntingInc,
    },
  ];
  return {
    stats,
    user,
    featuredJobs,
  };
}

export default useMessagesTemplateChunk;
