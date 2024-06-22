import { StoryObj } from "@storybook/react";

import HiringCategoryCardMeta from "./hiringCategoryCard.stories";
import { ReactNode } from "react";

export type HiringCategoryCardProps = {
  icon: ReactNode;
  title: string;
};

export type HiringCategoryCardStory = StoryObj<typeof HiringCategoryCardMeta>;
