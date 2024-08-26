import { Meta } from "@storybook/react";
import { IM_MotionDesigner } from "@assets/images";
import JobDetailCard from "./JobDetailCard";
import { JobDetailCardStory } from "./JobDetailCard.types";

const JobDetailCardMeta = {
  title: "Components/Cards/JobDetailCard",
  component: JobDetailCard,
} satisfies Meta<typeof JobDetailCard>;

export const DefaultStory: JobDetailCardStory = {
  args: {
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
  name: "Job Detail Card",
};

export default JobDetailCardMeta;
