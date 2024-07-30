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
        color: "#1976D2",
        bgcolor: "#4640DE1A",
        track: "Crypto",
      },
    ],
  },
  name: "Recommended Companies Card",
};

export default RecommendedCompaniesCardMeta;
