import { Meta } from "@storybook/react";

import Nomad from "public/images/Nomad.svg";
import { JobDescriptionCardStory } from "./JobDescriptionCard.types";
import JobDescriptionCard from "./JobDescriptionCard";

const JobDescriptionCardMeta = {
  title: "Components/Cards/JobDescriptionCard",
  component: JobDescriptionCard,
} satisfies Meta<typeof JobDescriptionCard>;

export const DefaultStory: JobDescriptionCardStory = {
  args: {
    img: Nomad,
    title: "Social Media Assitant",
    company: "Nomad",
    location: "Paris, France",
    duration: "Full-Time",
  },
  name: "Job Description Card",
};

export default JobDescriptionCardMeta;
