import { Meta } from "@storybook/react";
import MessagesHeaderChunk from "./MessagesHeaderChunk";
import { MessagesHeaderChunkStory } from "./MessagesHeaderChunk.types";

const MessagesHeaderChunkMeta = {
  title: "Chunks/Shared/MessagesHeaderChunk",
  component: MessagesHeaderChunk,
} satisfies Meta<typeof MessagesHeaderChunk>;

export const Story: MessagesHeaderChunkStory = {
  args: {
    title: "Messages",
  },
};
export default MessagesHeaderChunkMeta;
