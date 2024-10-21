import { ListItem } from "@/utils/types";
import { ApplicationSent, InterviewSchedule } from "@assets/images";

export default function useCompanyDashboardTemplateChunk() {
  const stats: ListItem[] = [
    {
      name: "Candidates",
      id: "20",
      image: ApplicationSent,
    },
    {
      name: "Schedule",
      id: "185",
      image: InterviewSchedule,
    },
    {
      name: "Open Jobs",
      id: "10",
      image: ApplicationSent,
    },
  ];

  return {
    stats,
  };
}
