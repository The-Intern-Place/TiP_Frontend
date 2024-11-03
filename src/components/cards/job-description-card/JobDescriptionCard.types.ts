import { StoryObj } from "@storybook/react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import JobDescriptionCardMeta from "./JobDescriptionCard.stories";

export type JobDescriptionCardProps = {
  img: string | StaticImport;
  title: string;
  company: string;
  location: string;
  duration: string;
};

export type JobDescriptionCardStory = StoryObj<typeof JobDescriptionCardMeta>;
