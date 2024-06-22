import { title } from "process";
import { HiringCardStory } from "./hiringCard.type";
import HiringCard from "./hiringCard";
import { Meta } from "@storybook/react";

import Nomad from "public/Nomad.svg";

const HiringCardMeta = {
  title: "Components/Cards/HiringCard",
  component: HiringCard,
} satisfies Meta<typeof HiringCard>;

export const DefaultStory: HiringCardStory = {
  args: {
    img: Nomad,
    title: "Nomad",
    description:
      "Nomad is located in Paris, France. Nomad has generates $728,000 in sales (USD).",
    trackOne: "Business",
  },
  name: "Hiring Card",
};

export default HiringCardMeta;
