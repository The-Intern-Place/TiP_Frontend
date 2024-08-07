import { StoryObj } from "@storybook/react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import CompnayProfileHeroCardMeta from "./CompanyProfileHeroCard.stories";

export type CompanyProfileHeroCardProps = {
  id: string;
  img: string | StaticImport;
  title: string;
  text: string;
};

export type CompanyProfileHeroCardStory = StoryObj<
  typeof CompnayProfileHeroCardMeta
>;
