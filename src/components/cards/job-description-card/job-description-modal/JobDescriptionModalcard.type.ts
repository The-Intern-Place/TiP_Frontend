import { StoryObj } from "@storybook/react";

import JobDescriptionModalCardMeta from "./JobDescriptionModalCard.stories";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type JobDescriptionModalCardProps = {
  img: string | StaticImport;
  title: string;
  company: string;
  location: string;
  duration: string;
};

export type JobDescriptionModalCardStory = StoryObj<
  typeof JobDescriptionModalCardMeta
>;
