import { Meta } from "@storybook/react";
import FindJobTileCard from "./FindJobTileCard";
import Nomad from "public/images/Nomad.svg";
import { FindJobTileCardStory } from "./FindJobTileCard.types";

const FindJobTileCardMeta = {
  title: "Components/Cards/FindJobTileCard",
  component: FindJobTileCard,
} satisfies Meta<typeof FindJobTileCard>;

export const DefaultStory: FindJobTileCardStory = {
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
  name: "Find Job Tile Card",
};

export default FindJobTileCardMeta;
