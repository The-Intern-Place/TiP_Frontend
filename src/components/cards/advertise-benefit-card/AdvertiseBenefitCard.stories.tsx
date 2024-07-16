import { Meta } from "@storybook/react";
import AdvertiseBenefitCard from "./AdvertiseBenefitCard";
import awareness from "public/awareness.svg";
import { AdvertiseBenefitCardStory } from "./AdvertiseBenefitCard.types";

const AdvertiseBenefitCardMeta = {
  title: "Components/Card/AdvertiseBenefitCard",
  component: AdvertiseBenefitCard,
} satisfies Meta<typeof AdvertiseBenefitCard>;

export const DefaultStory: AdvertiseBenefitCardStory = {
  args: {

    id: "1",
    image: awareness,
    title: "Brand Awareness",
    description:
      "Get your brand in front of a highly targeted audience. It is a fantastic chance to showcase what makes your brand unique.",
  },

  name: "Advertise Benefit  Card",
};

export default AdvertiseBenefitCardMeta;
