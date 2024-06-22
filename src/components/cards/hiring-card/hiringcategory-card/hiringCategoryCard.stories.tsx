import { title } from "process";

import HiringCategoryCard from "./hiringCategoryCard";
import { Meta } from "@storybook/react";
import { HiringCategoryCardStory } from "./hiringCategoryCard.types";
import Design_Icon from "public/hiringimage/Hiring_Design";

const HiringCategoryCardMeta = {
  title: "Components/Cards/HiringCategoryCard",
  component: HiringCategoryCard,
} satisfies Meta<typeof HiringCategoryCard>;

export const DefaultStory: HiringCategoryCardStory = {
  args: {
    icon: (
      <Design_Icon className="group-hover:stroke-white group-hover:fill-white" />
    ),
    title: "Design",
  },
  name: "HiringCategoryCard",
};

export default HiringCategoryCardMeta;
