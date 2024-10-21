export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  description?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  id?: string;
  name?: string;
  value?: string;
  required?: boolean;
  readOnly?: boolean;
  tabIndex?: number;
  autoFocus?: boolean;
  "aria-label"?: string;
  "aria-checked"?: "true" | "false" | "mixed";
  "aria-disabled"?: "true" | "false";
  className?: string;
  form?: string;
  [key: string]: any;
}
