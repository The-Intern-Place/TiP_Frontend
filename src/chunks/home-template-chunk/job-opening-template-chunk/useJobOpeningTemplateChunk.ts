"use client";
import { useGetAllJobsQuery } from "@/services/jobs/jobs.service";

export default function useJobOpeningTemplateChunk() {
  const { data, isFetching } = useGetAllJobsQuery({});

  console.log(data, isFetching);

  return {
    data,
  };
}
