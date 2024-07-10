import { Meta } from "@storybook/react";
import AuthPageLayout from "./AuthPageLayout";
import { AuthPageLayoutStory } from "./AuthPageLayout.types";

const AuthPageLayoutMeta = {
  title: "Components/Layout/AuthPageLayout",
  component: AuthPageLayout,
} satisfies Meta<typeof AuthPageLayout>;

export const DefaultStory: AuthPageLayoutStory = {
  args: {
    children: <div>This is a div</div>,
    heading: "Welcome Back!",
  },
  name: "AuthPageLayout",
};
export default AuthPageLayoutMeta;
