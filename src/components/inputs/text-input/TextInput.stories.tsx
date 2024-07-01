import { Meta } from "@storybook/react";
import TextInput from "./TextInput";
import { TextInputStory } from "./TextInput.types";
import Button from "@/components/button/Button";

const TextInputMeta = {
  title: "Components/Inputs/TextInput",
  component: TextInput,
  tags: ["autodocs"],
} satisfies Meta<typeof TextInput>;

export const DefaultStory: TextInputStory = {
  args: {
    label: "Your Name",
    placeholder: "Let's know your name",
    type: "text",
    onChange: () => {},
  },
  name: "Text Input",
};

export const DefaultStory2: TextInputStory = {
  args: {
    label: "",
    type: "text",
    iconRight: <Button>Subscribe</Button>,
    onChange: () => {},
  },
  name: "Right Icon Input",
};
export default TextInputMeta;
