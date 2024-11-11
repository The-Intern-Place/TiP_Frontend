import { StoryObj } from "@storybook/react";
import {
  IBaseControlledField,
  ITextInputProps,
} from "../text-input/TextInput.types";
import SelectInputMeta from "./SelectInput.stories";
import { SelectHTMLAttributes, ReactNode } from "react";
import { FieldValues } from "react-hook-form";

export type SelectInputProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "className"
> & {
  label: string;
  name: string;
  optionsData?: ReactNode;
  placeholder: string;
  overrideStyles?: string;
};

export type SelectCountryProps = {
  name: string;
  code: string;
  dial_code: string;
};

export type ListItem = { id: string; name: string };

export type ISelectInputProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "className"
> &
  ITextInputProps & {
    options: ListItem[];
    multiple?: boolean;
    clickOutSide?: boolean;
    onChange?: (_el: ListItem) => void;
  };

export type IControlledSelect<TFieldValues extends FieldValues> =
  IBaseControlledField<TFieldValues> &
    Omit<ISelectInputProps, "value" | "name">;

export type SelectInputStory = StoryObj<typeof SelectInputMeta>;
