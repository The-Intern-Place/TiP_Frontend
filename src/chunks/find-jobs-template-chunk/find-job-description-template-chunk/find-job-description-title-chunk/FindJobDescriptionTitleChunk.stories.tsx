import { Meta } from "@storybook/react";
import FindJobDescriptionTitleChunk from "./FindJobDescriptionTitleChunk";
import Nomad from "public/images/Nomad.svg";
import { FindJobDescriptionTitleChunkStory } from "./FindJobDescriptionTitle.types";

const FindJobTitleChunkMeta = {
  title:
    "Chunks/FindJobsTemplateChunk/FindJobDescriptionTemplateChunk/FindJobDescriptionTitleChunk",
  component: FindJobDescriptionTitleChunk,
} satisfies Meta<typeof FindJobDescriptionTitleChunk>;

export const Story: FindJobDescriptionTitleChunkStory = {
  args: {
    title: "Social Media Assistant",
    img: Nomad,
    company: "Urban Tech",
    location: "Lagos, Nigeria",
    type: "Full time",
  },
};
export default FindJobTitleChunkMeta;
