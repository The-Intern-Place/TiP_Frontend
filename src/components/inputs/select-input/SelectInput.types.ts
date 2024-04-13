import { StoryObj } from "@storybook/react";
import { TextInputProps } from "../text-input/TextInput.types";
import SelectInputMeta from "./SelectInput.stories";

export type SelectInputProps = TextInputProps & {
    options: {id: string, name: string}[],
    clickOutSide?: boolean;
}
export type SelectInputStory = StoryObj<typeof SelectInputMeta>
import { ReactNode, SelectHTMLAttributes } from "react";

// export type SelectInputProps = Omit<
//   SelectHTMLAttributes<HTMLSelectElement>,
//   "className"
// > & {
//   label: string;
//   name: string;
//   optionsData?: ReactNode;
//   placeholder: string;
// };

export type SelectCountryProps = {
  name: string;
  code: string;
  dial_code: string;
};
