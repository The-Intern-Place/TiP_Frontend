"use client";
import { useGetAllJobsQuery } from "@/services/jobs/jobs.service";

export default function useJobOpeningTemplateChunk() {
  const { data } = useGetAllJobsQuery({});

  return {
    data,
  };
}
