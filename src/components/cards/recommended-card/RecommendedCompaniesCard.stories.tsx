import { Meta } from "@storybook/react";
import Nomad from "public/images/Nomad.svg";
import RecommendedCompaniesCard from "./RecommendedCompaniesCard";
import { RecommendedCompaniesCardStory } from "./RecommendedCompaniesCard.types";

const RecommendedCompaniesCardMeta = {
  title: "Components/Cards/RecommendedCompaniesCard",
  component: RecommendedCompaniesCard,
} satisfies Meta<typeof RecommendedCompaniesCard>;

export const DefaultStory: RecommendedCompaniesCardStory = {
  args: {
    img: Nomad,
    title: "Nomad",
    description:
      "Nomad is located in Paris, France. Nomad has generates $728,000 in sales (USD).",
    tracks: [
      {
        style: "text-[#FFB836] border-2 border-[#FFB836]",
        track: "Business Service",
      },
    ],
  },
  name: "Recommended Companies Card",
};

export default RecommendedCompaniesCardMeta;
