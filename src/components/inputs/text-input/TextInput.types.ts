import { StoryObj } from "@storybook/react";
import { InputHTMLAttributes, ReactNode } from "react";
import TextInputMeta from "./TextInput.stories";

export type TextInputProps = 
  Omit<InputHTMLAttributes<HTMLInputElement>, "className" | "onChange"> & {
    label: string;
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
  }

export type TextInputStory = StoryObj<typeof TextInputMeta>