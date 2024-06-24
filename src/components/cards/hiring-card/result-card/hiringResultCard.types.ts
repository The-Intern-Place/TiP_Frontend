import { StoryObj } from "@storybook/react";
import HiringResultMeta from "./HiringResultCard.stores";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type HiringResultProps = {
  img: string | StaticImport;
  title: string;
  jobs: string;
};

export type HiringResultStory = StoryObj<typeof HiringResultMeta>;
