import { StoryObj } from "@storybook/react";
import EducationProfileCardMeta from "./EducationProfileCard.stories";

export type EducationProfileCardProps = {
  id: string;
  img: string;
  title: string;
  subtitle: string;
  date: string;
  description?: string;
};

export type EducationProfileCardStory = StoryObj<
  typeof EducationProfileCardMeta
>;
