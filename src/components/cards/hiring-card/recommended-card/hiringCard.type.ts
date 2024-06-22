import { StoryObj } from "@storybook/react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import HiringCardMeta from "./hiringCard.stories";

export type HiringCardProps = {
  img: string | StaticImport;
  title: string;
  description: string;
  trackOne: string;
  trackTwo?: string;
  trackThree?: string;
};

export type HiringCardStory = StoryObj<typeof HiringCardMeta>;
