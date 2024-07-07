import { StoryObj } from "@storybook/react";
import { ReactNode } from "react";
import AdvertiseCardMeta from "./AdvertiseCard.stories";

export type AdvertiseCardProps = {
  // icon:  React.FC<{color?: string, className?: string}>;
  icon: ReactNode;
  children: ReactNode;
  texts:string;
};

export type AdvertiseCardStory = StoryObj<typeof AdvertiseCardMeta>;
