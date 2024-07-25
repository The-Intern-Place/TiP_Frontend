import { Meta } from "@storybook/react";
import { FoundersOfferCardStory } from "./FoundersOfferCard.type";
import FoundersOfferCard from "./FoundersOfferCard";

const FoundersOfferCardMeta = {
  title: "Components/Cards/FoundersOfferCard",
  component: FoundersOfferCard,
} satisfies Meta<typeof FoundersOfferCard>;

export const DefaultStory: FoundersOfferCardStory = {
  args: {
    img: "/images/Network.svg",
    title: "Global Reach",
    description:
      "While based in Nigeria, our network extends far beyond. We connect African talent with opportunities around the world, fostering international growth, collaboration, and the exchange of skills and ideas.",
  },
  name: "Founders Offer Card",
};

export default FoundersOfferCardMeta;
