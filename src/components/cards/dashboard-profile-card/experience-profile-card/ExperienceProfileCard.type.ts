import { StoryObj } from "@storybook/react";
import ExperienceProfileCardMeta from "./ExperienceProfileCard.stories";

export type ExperienceProfileCardProps = {
  id: string;
  img: string;
  title: string;
  subtitle: string;
  date: string;
  condition: string;
  description: string;
};

export type ExperienceProfileCardStory = StoryObj<
  typeof ExperienceProfileCardMeta
>;
