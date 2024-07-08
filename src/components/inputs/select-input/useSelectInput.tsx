import { useRef, useState } from "react";
import { ISelectInputProps, ListItem } from "./SelectInput.types";
import { useDetectClickOutside } from "@/hooks/useDetectClickOutside";

export const useSelectInput = (props: ISelectInputProps) => {
  const [showOptions, setShowOptions] = useState(false);
  const ref = useRef(null);

  useDetectClickOutside(ref, () => setShowOptions(false));

  const handleSelect = (el: ListItem) => {
    props?.onChange?.(el);
  };

  return {
    showOptions,
    setShowOptions,
    ref,
    handleSelect,
  };
};
