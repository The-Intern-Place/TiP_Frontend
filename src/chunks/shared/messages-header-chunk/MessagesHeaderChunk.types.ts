import { ReactNode } from "react";
import { StoryObj } from "@storybook/react";
import MessagesHeaderChunkMeta from "./MessagesHeaderChunk.stories";

export type MessagesHeaderChunkProps = {
  title: string;
  action?: ReactNode;
};
export type MessagesHeaderChunkStory = StoryObj<typeof MessagesHeaderChunkMeta>;
