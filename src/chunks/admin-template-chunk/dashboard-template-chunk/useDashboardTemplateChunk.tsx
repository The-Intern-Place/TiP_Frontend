import { ListItem } from "@/utils/types";
import {
  ApplicationSent,
  GraphicDesigner,
  IM_CannyCo,
  IM_GreenHouse,
  IM_HuntingInc,
  IM_Meta,
  IM_MotionDesigner,
  IM_ProjectManager,
  InterviewSchedule,
  JobOpening,
} from "@assets/images";

export default function useDashboardTemplateChunk() {
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
  const recommendedJobs = [
    {
      image: IM_MotionDesigner,
      title: "Motion Designer",
      city: "Blue Waters",
      state: "Lagos, Nigeria",
      job_duration: "Part-Time",
      job_type: "Internship",
      job_mode: "Hybrid",
      skills:
        "User Interface (UI) AnimationStorytelling and Communication Adobe After Effects, Cinema 4D",
      applicants: 100,
      created_at: "2 days ago",
    },
    {
      image: GraphicDesigner,
      title: "Graphic Designer",
      city: "Greenio",
      state: "Lagos, Nigeria",
      job_duration: "Contract",
      job_type: "Entry-level",
      job_mode: "On-SIte",
      skills:
        "Collaboration, Animation and Communication Adobe, After Effects, Cinema 4D",
      applicants: 50,
      created_at: "2 weeks ago",
    },
    {
      image: IM_ProjectManager,
      title: "Project  Manager",
      city: "Note",
      state: "Lagos, Nigeria",
      job_duration: "Full-Time",
      job_type: "Mid-Level",
      job_mode: "Remote",
      skills:
        "Team Collaboration, Project Management Software, Risk Management, Time Management.",
      applicants: 100,
      created_at: "15 Minutes ago",
    },
  ];
  return {
    stats,
    user,
    featuredJobs,
    recommendedJobs,
  };
}
