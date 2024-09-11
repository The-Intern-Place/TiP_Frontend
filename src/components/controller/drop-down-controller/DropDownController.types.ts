import { ListItem } from "@/utils/types";
import { ReactNode } from "react";

export type DropDownControllerProps = {
  children: ReactNode;
  onSelect?: (_payload: ListItem) => void;
  options?: ListItem[];
  width?: number;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
};
