import { StoryObj } from "@storybook/react";
import { InputHTMLAttributes, ReactNode } from "react";
import TextInputMeta from "./TextInput.stories";
import { Control, FieldErrorsImpl, FieldValues, Path } from "react-hook-form";
import { IFieldHelperTextProps } from "@/components/field-helper-text/FieldHelperText.types";

export type ITextInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "className" | "onChange"
> &
  IFieldHelperTextProps & {
    label: string;
    overrideStyles?: string;
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
    onChange?: (
      // eslint-disable-next-line no-unused-vars
      e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
      // eslint-disable-next-line no-unused-vars
      value: string,
    ) => void;
  };
export interface IBaseControlledField<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  errors?: Partial<FieldErrorsImpl<TFieldValues>>;
}

export type IControlledInput<TFieldValues extends FieldValues> =
  IBaseControlledField<TFieldValues> & Omit<ITextInputProps, "value" | "name">;

export type TextInputStory = StoryObj<typeof TextInputMeta>;
