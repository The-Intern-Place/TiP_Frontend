import { StoryObj } from "@storybook/react";
import { ReactNode } from "react"
import CategoryCardMeta from "./CategoryCard.stories";

export type CategoryCardProps = {
    // icon:  React.FC<{color?: string, className?: string}>;
    icon: ReactNode;
    children: ReactNode;
    openPositions: number;
}

export type CategoryCardStory = StoryObj<typeof CategoryCardMeta>;