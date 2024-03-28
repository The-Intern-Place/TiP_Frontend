import { Meta, StoryObj } from "@storybook/react";
import Navbar from "./Navbar";

const ButtonMeta = {
  title: "Components/Navbar",
  component: Navbar,
} satisfies Meta<typeof Navbar>;

type NavbarStory = StoryObj<typeof Navbar>;

export const Story: NavbarStory = {
    args: {},
    name: "Navbar"
}

export default ButtonMeta;