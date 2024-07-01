import { Meta, StoryObj } from "@storybook/react";
import Footer from "./Footer";

const FooterMeta = {
  title: "Components/Footer",
  component: Footer,
} satisfies Meta<typeof Footer>;

type FooterStory = StoryObj<typeof Footer>;

export const Story: FooterStory = {
  args: {},
  name: "Footer",
};
export default FooterMeta;
