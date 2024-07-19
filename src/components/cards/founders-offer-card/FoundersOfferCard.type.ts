import { StoryObj } from "@storybook/react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import FoundersOfferCardMeta from "./FoundersOfferCard.stories";

export type FoundersOfferCardProps = {
  id?: string;
  img?: string | StaticImport;
  secondimg?: string | StaticImport;
  thirdimg?: string | StaticImport;
  fourthimg?: string | StaticImport;
  title: string;
  description: string;
  descriptiontwo?: string;
};

export type FoundersOfferCardStory = StoryObj<typeof FoundersOfferCardMeta>;
