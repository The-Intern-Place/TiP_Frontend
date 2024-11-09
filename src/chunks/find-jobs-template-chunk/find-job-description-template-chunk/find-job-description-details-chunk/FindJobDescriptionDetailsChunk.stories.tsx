import { Meta } from "@storybook/react";
import FindJobDescriptionDetailsChunk from "./FindJobDescriptionDetailsChunk";
import { FindJobDescriptionDetailsChunkStory } from "./FindJobDescriptionDetailsChunk.types";
import Nomad from "public/images/Nomad.svg";

const FindJobDescriptionDetailsChunkMeta = {
  title:
    "Chunks/FindJobsTemplateChunk/FindJobDescriptionTemplateChunk/FindJobDescriptionDetailsChunk",
  component: FindJobDescriptionDetailsChunk,
} satisfies Meta<typeof FindJobDescriptionDetailsChunk>;

export const Story: FindJobDescriptionDetailsChunkStory = {
  args: {
    title: "Social Media Assistant",
    img: Nomad,
    company: "Urban Tech",
    location: "Lagos, Nigeria",
    type: "Full time",
    applied: 5,
    capacity: 10,
    responsibilities: [
      "Community engagement to ensure that is supported and actively represented online",
      "Focus on social media content development and publication",
      "Marketing and strategy support",
      "Stay on top of trends on social media platforms, and suggest content ideas to the team",
      "Engage with online communities",
    ],
    whoYouAre: [
      "You get energy from people and building the ideal work environment",
      "You have a sense for beautiful spaces and office experiences",
      "You are a confident office manager, ready for added responsibilities",
    ],
    niceToHaves: [
      "Fluent in English",
      "You have a sense for beautiful spaces and office experiences",
      "You are a confident office manager, ready for added responsibilities",
    ],
    perksAndBenefits: [
      {
        title: "Full Healthcare",
        content:
          "We believe in thriving communities and that starts with our team being happy and healthy.",
      },
    ],
    additionalDetails: {
      applyBefore: "2024-05-01",
      postedOn: "2024-04-01",
      jobType: "Full-Time",
      salary: "N100,000 - N150,000",
    },
    categories: ["Social Media", "Marketing", "Remote"],
    requiredSkills: ["Social Media", "Marketing", "Remote"],
    companyInfo: {
      name: "Urban Tech",
      description:
        "Urban Tech is a company that builds software for the urban planning industry.",
    },
  },
};
export default FindJobDescriptionDetailsChunkMeta;
