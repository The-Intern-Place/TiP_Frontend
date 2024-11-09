import { StoryObj } from "@storybook/react";
import HelpCentreCardMeta from "./HelpCentreCard.stories";

export type HelpCentreCardProps = {
  id: number;
  title: string;
  paragraph: string;
  question: string;
};
export type HelpCentreCardStory = StoryObj<typeof HelpCentreCardMeta>;
