import { StoryObj } from "@storybook/react";
import { ReactNode } from "react";
import AuthPageLayoutMeta from "./AuthPageLayout.stories";

export type IAuthPageLayoutProps = {
  children: ReactNode;
  heading: string;
};

export type AuthPageLayoutStory = StoryObj<typeof AuthPageLayoutMeta>;
