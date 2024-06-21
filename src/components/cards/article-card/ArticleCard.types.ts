import { StoryObj } from "@storybook/react";
import ArticleCardMeta from "./ArticleCard.stories";

export type ArticleCardProps = {
    title: string;
    description: string;
    views: string
    date:string
    cardType?: string;
}

export type ArticleCardStory = StoryObj<typeof ArticleCardMeta>;