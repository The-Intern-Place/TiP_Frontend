import { StoryObj } from "@storybook/react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import RecommendedCompaniesCardMeta from "./RecommendedCompaniesCard.stories";

export type RecommendedCompaniesCardProps = {
  img: string | StaticImport;
  title: string;
  description: string;
  tracks: Array<{
    bgcolor?: string;
    color: string;
    border?: string;
    track: string;
  }>;
};

export type RecommendedCompaniesCardStory = StoryObj<
  typeof RecommendedCompaniesCardMeta
>;
