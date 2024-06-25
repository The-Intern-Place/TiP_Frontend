import { Meta } from "@storybook/react";
import Design_Icon from "public/icons/Hiring_Design";
import HiringCategoryCard from "./HiringCategoryCard";
import { HiringCategoryCardStory } from "./HiringCategoryCard.types";

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
