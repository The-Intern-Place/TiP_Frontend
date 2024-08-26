import { StoryObj } from "@storybook/react";
import JobDetailCardMeta from "./JobDetailCard.stories";

export type IJobDetailCard = {
  image: string;
  title: string;
  city: string;
  state: string;
  job_duration: string;
  job_type: string;
  job_mode: string;
  skills: string;
  applicants: number;
  created_at: string;
};

export type JobDetailCardStory = StoryObj<typeof JobDetailCardMeta>;
