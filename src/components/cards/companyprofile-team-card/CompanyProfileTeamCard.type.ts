import { StoryObj } from "@storybook/react";
import CompanyProfileTeamCardMeta from "./CompanyProfileTeamCard.stories";

export type CompanyProfileTeamCardProps = {
  id: string;
  img: string;
  title: string;
  text: string;
};

export type CompanyProfileTeamCardStory = StoryObj<
  typeof CompanyProfileTeamCardMeta
>;
