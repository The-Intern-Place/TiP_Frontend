import { Meta } from "@storybook/react";
import DashboardHeaderChunk from "./DashboardHeaderChunk";
import { DashboardHeaderChunkStory } from "./DashboardHeaderChunk.types";

const DashboardHeaderChunkMeta = {
  title: "Chunks/Shared/DashboardHeaderChunk",
  component: DashboardHeaderChunk,
} satisfies Meta<typeof DashboardHeaderChunk>;

export const Story: DashboardHeaderChunkStory = {
  args: {
    title: "Dashboard",
  },
};
export default DashboardHeaderChunkMeta;
