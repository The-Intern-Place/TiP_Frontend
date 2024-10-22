import { ListItem } from "@/utils/types";
import { ApplicationSent, InterviewSchedule, User } from "@assets/images";

export default function useCompanyDashboardTemplateChunk() {
  const stats: ListItem[] = [
    {
      name: "Candidates",
      id: "20",
      image: User,
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
