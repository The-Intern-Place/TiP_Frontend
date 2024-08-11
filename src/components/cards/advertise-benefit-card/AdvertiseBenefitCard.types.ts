import { StoryObj } from "@storybook/react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import AdvertiseBenefitCardMeta from "./AdvertiseBenefitCard.stories";

export type AdvertiseBenefitCardProps = {
  id: string | number;
  image: string | StaticImport;
  title: string;
  description: string;
};

export type AdvertiseBenefitCardStory = StoryObj<
  typeof AdvertiseBenefitCardMeta
>;
