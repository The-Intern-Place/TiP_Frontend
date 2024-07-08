import React from "react";
import { FieldValues, Controller } from "react-hook-form";
import { IControlledSelect, ListItem } from "./SelectInput.types";
import SelectInput2 from "./SelectInput2";

const ControlledSelect = <TFieldValue extends FieldValues>(
  props: IControlledSelect<TFieldValue>,
) => {
  const { control, name: cname, ...rest } = props;
  return (
    <Controller
      control={control}
      name={cname}
      render={({ field: { ref: _ref, ...fields }, fieldState }) => (
        <SelectInput2
          {...fields}
          {...rest}
          value={
            props.options.find((option) => option.id === fields.value)?.name
          }
          onChange={(el) => {
            fields.onChange((el as ListItem)?.id);
            props?.onChange?.(el as ListItem);
          }}
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
};

export default ControlledSelect;
