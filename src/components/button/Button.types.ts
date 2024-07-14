import { StoryObj } from "@storybook/react";
import { ButtonHTMLAttributes } from "react";
import ButtonMeta from "./Button.stories";

export type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "className"
> & {
  variant?: "primary" | "outlined" | "secondary" | "transparent";
  overrideStyles?: string;
  fit?: boolean;
  loading?: boolean;
};

export type ButtonStory = StoryObj<typeof ButtonMeta>;
