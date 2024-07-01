import { Meta } from "@storybook/react";
import IC_Manager from "public/icons/IC_Manager";
import CategoryCard from "./CategoryCard";
import { CategoryCardStory } from "./CategoryCard.types";

const CategoryCardMeta = {
  title: "Components/Cards/CategoryCard",
  component: CategoryCard,
} satisfies Meta<typeof CategoryCard>;

export const DefaultStory: CategoryCardStory = {
  args: { icon: <IC_Manager />, children: "Manager", openPositions: 75 },
  name: "Category Card",
};

export default CategoryCardMeta;
