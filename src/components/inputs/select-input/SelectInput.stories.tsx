import { Meta } from "@storybook/react";
import SelectInput from "./SelectInput";
import { SelectInputStory } from "./SelectInput.types";

const SelectInputMeta: Meta = {
  title: "Components/Inputs/SelectInput",
  component: SelectInput,
  tags: ["autodocs"],
} satisfies Meta<typeof SelectInput>;

export const DefaultStory: SelectInputStory = {
  args: {
    label: "Reason",
    placeholder: "Let’s Know why you’re messaging...",
    options: [{ id: "business", name: "Business" }],
  },
};

export default SelectInputMeta;
