import { StoryObj } from "@storybook/react";

import JobDescriptionCardMeta from "./JobDescriptionCard.stories";
import { ReactNode } from "react";

export type JobDescriptionCardProps = {
  img: string | ReactNode;
  title: string;
  company: string;
  location: string;
  duration: string;
  setIsModal?: React.Dispatch<React.SetStateAction<boolean>>;
};

export type JobDescriptionCardStory = StoryObj<typeof JobDescriptionCardMeta>;
