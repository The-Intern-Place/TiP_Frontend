import { Meta } from "@storybook/react";
import FindJobCard from "./FindJobCard";
import Nomad from "public/Nomad.svg";
import { FindJobCardStory } from "./FindJobCard.types";

const FindJobCardMeta = {
  title: "Components/Cards/FindJobCard",
  component: FindJobCard,
} satisfies Meta<typeof FindJobCard>;

export const DefaultStory: FindJobCardStory = {
  args: {
    img: Nomad,
    title: "Social Media Assitant",
    company: "Nomad",
    location: "Paris, France",
    duration: "Full-Time",
    sector1: "Marketing",
    sector2: "Design",
    applied: "5",
    capacity: "10",
  },
  name: "Find Job Card",
};

export default FindJobCardMeta;
