import { Meta } from "@storybook/react";
import JobCard from "./JobCard";
import { JobCardStory } from "./JobCard.types";
import { BrandDesigner } from "@assets/images";

const JobCardMeta = {
  title: "Components/Cards/JobCard",
  component: JobCard,
} satisfies Meta<typeof JobCard>;

export const DefaultStory: JobCardStory = {
  args: {
    image: BrandDesigner,
    title: "Brand Designer",
    company: "Urban Tech",
    location: "Port Harcourt, Nigeria",
    duration: "Full-Time",
    sector: "Design",
  },
  name: "Job Card",
};

export default JobCardMeta;
