import { Controller, FieldValues } from "react-hook-form";
import TextInput from "./TextInput";
import { IControlledInput } from "./TextInput.types";

const ControlledInput = <TFieldValue extends FieldValues>(
  props: IControlledInput<TFieldValue>,
) => {
  const { control, name: cname, ...rest } = props;
  return (
    <Controller
      control={control}
      name={cname}
      render={({ field: { ref: _ref, ...fields }, fieldState }) => (
        <TextInput
          {...fields}
          {...rest}
          onChange={(e, value) => {
            fields.onChange({ ...e, target: { ...e.target, value } });
            props?.onChange?.(e, value);
          }}
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
};

export default ControlledInput;
