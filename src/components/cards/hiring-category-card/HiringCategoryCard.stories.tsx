import { Meta } from "@storybook/react";
import HiringCategoryCard from "./HiringCategoryCard";
import { HiringCategoryCardStory } from "./HiringCategoryCard.types";
import IC_HiringDesign from "@assets/icons/IC_HiringDesign";

const HiringCategoryCardMeta = {
  title: "Components/Cards/HiringCategoryCard",
  component: HiringCategoryCard,
} satisfies Meta<typeof HiringCategoryCard>;

export const DefaultStory: HiringCategoryCardStory = {
  args: {
    icon: (
      <IC_HiringDesign className="group-hover:stroke-white group-hover:fill-white" />
    ),
    title: "Design",
  },
  name: "HiringCategoryCard",
};

export default HiringCategoryCardMeta;
