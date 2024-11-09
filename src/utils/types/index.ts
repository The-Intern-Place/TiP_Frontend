import { ReactNode } from "react";

export type ListItem = {
  id: string;
  name: string;
  description?: string;
  category?: string;
  icon?: ReactNode;
  readonly?: boolean;
  value?: number;
  // eslint-disable-next-line @typescript-eslint/ban-types
  action?: Function;
  image?: string;
  component?(): ReactNode;
};
