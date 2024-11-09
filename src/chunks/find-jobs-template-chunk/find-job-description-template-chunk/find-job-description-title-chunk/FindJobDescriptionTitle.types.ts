import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { StoryObj } from "@storybook/react";
import FindJobDescriptionTitleChunkMeta from "./FindJobDescriptionTitleChunk.stories";

export type FindJobDescriptionTitleChunkProps = {
  title: string;
  img: string | StaticImport;
  company: string;
  location: string;
  type: string;
};
export type FindJobDescriptionTitleChunkStory = StoryObj<
  typeof FindJobDescriptionTitleChunkMeta
>;
