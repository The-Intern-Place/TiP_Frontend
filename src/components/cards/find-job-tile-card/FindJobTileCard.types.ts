import { StoryObj } from "@storybook/react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import FindJobTileCardMeta from "./FindJobTileCard.stories";

export type FindJobTileCardProps = {
  id: string;
  img: string | StaticImport;
  title: string;
  company: string;
  location: string;
  duration: string;
  sector1: string;
  sector2: string;
  applied: string;
  capacity: string;
  jobLevel: string;
  salaryRange: string;
};

export type FindJobTileCardStory = StoryObj<typeof FindJobTileCardMeta>;
