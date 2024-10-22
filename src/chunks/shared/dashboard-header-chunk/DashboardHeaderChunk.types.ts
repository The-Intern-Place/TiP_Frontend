import { ReactNode } from "react";
import { StoryObj } from "@storybook/react";
import DashboardHeaderChunkMeta from "./DashboardHeaderChunk.stories";

export type DashboardHeaderChunkProps = {
  title: string;
  action?: ReactNode;
  company?: boolean;
};
export type DashboardHeaderChunkStory = StoryObj<
  typeof DashboardHeaderChunkMeta
>;
