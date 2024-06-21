import { Meta } from "@storybook/react";
import IC_Manager from "public/icons/IC_Manager";
import ArticleCard from "./ArticleCard";
import { ArticleCardStory } from "./ArticleCard.types";

const ArticleCardMeta = {
  title: "Components/Cards/ArticleCard",
  component: ArticleCard,
} satisfies Meta<typeof ArticleCard>;

export const DefaultStory: ArticleCardStory = {
  args: {
    title: "Acing Common Interview Questions",
    description:
      "Interviews can be nerve-wracking, but with the right preparation, you can turn them into opportunities to shine. Understanding and practicing answers to common interview questions is a key part of this preparation.",
    views: "12,000",
    date: "May 20, 2024",
  },
  name: "Article Card",
};

export default ArticleCardMeta;
