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
    trackOne: "Business",
  },
  name: "Recommended Companies Card",
};

export default RecommendedCompaniesCardMeta;
