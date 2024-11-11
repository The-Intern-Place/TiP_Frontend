import { StoryObj } from "@storybook/react";
import FindJobDescriptionDetailsChunkMeta from "./FindJobDescriptionDetailsChunk.stories";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type FindJobDescriptionDetailsChunkProps = {
  title: string;
  img: string | StaticImport;
  company: string;
  location: string;
  type: string;
  applied: number;
  capacity: number;
  responsibilities: string[];
  whoYouAre: string[];
  niceToHaves: string[];
  perksAndBenefits: {
    title: string;
    content: string;
  }[];
  additionalDetails: {
    applyBefore: string;
    postedOn: string;
    jobType: string;
    salary: string;
  };
  categories: string[];
  requiredSkills: string[];
  companyInfo: {
    name: string;
    description: string;
  };
};
export type FindJobDescriptionDetailsChunkStory = StoryObj<
  typeof FindJobDescriptionDetailsChunkMeta
>;
