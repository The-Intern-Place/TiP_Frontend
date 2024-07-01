import { StoryObj } from "@storybook/react";
import { TextInputProps } from "../text-input/TextInput.types";
import SelectInputMeta from "./SelectInput.stories";
import { SelectHTMLAttributes, ReactNode } from "react";

export type SelectInputProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "className"
> & {
  label: string;
  name: string;
  optionsData?: ReactNode;
  placeholder: string;
};

export type SelectCountryProps = {
  name: string;
  code: string;
  dial_code: string;
};

export type SelectInput2Props = TextInputProps & {
  options: { id: string; name: string }[];
  clickOutSide?: boolean;
};
export type SelectInputStory = StoryObj<typeof SelectInputMeta>;
