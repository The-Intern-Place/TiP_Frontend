import { StoryObj } from "@storybook/react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import RecommendedCompaniesCardMeta from "./RecommendedCompaniesCard.stories";

export type RecommendedCompaniesCardProps = {
  img: string | StaticImport;
  title: string;
  description: string;
  trackOne: string;
  trackTwo?: string;
  trackThree?: string;
};

export type RecommendedCompaniesCardStory = StoryObj<
  typeof RecommendedCompaniesCardMeta
>;
