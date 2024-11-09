import JobDescriptionModalCard from "./JobDescriptionModalCard";
import { JobDescriptionModalCardStory } from "./JobDescriptionModalcard.type";
import Nomad from "public/images/Nomad.svg";
import { Meta } from "@storybook/react";

const JobDescriptionModalCardMeta = {
  title: "Components/Card/JobDescriptionModalCard",
  component: JobDescriptionModalCard,
} satisfies Meta<typeof JobDescriptionModalCard>;

export const DefaultStory: JobDescriptionModalCardStory = {
  args: {
    img: Nomad,
    title: "Social Media Assitant",
    company: "Nomad",
    location: "Paris, France",
    duration: "Full-Time",
  },
  name: "Job Description Modal Card",
};

export default JobDescriptionModalCardMeta;
