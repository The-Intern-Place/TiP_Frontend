import { StoryObj } from "@storybook/react";
import { ReactNode } from "react";
import HiringCategoryCardMeta from "./HiringCategoryCard.stories";

export type HiringCategoryCardProps = {
  icon: ReactNode;
  title: string;
};

export type HiringCategoryCardStory = StoryObj<typeof HiringCategoryCardMeta>;
