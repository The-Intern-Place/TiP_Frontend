import { StoryObj } from "@storybook/react";
import { InputHTMLAttributes, ReactNode } from "react";
import TextInputMeta from "./TextInput.stories";

type InputChangePayload = {
  field: string | undefined;
  value: string;
};
export type TextInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "className" | "onChange"
> & {
  label: string;
  overrideStyles?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  onChange: (_payload: InputChangePayload) => void;
};

export type TextInputStory = StoryObj<typeof TextInputMeta>;
