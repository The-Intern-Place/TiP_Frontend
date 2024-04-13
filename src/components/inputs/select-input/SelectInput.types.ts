import { StoryObj } from "@storybook/react";
import { TextInputProps } from "../text-input/TextInput.types";
import SelectInputMeta from "./SelectInput.stories";

export type SelectInputProps = TextInputProps & {
    options: {id: string, name: string}[],
    clickOutSide?: boolean;
}
export type SelectInputStory = StoryObj<typeof SelectInputMeta>