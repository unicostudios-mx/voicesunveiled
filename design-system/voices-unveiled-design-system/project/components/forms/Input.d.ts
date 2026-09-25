import * as React from "react";

/**
 * Text input or textarea with the brand focus ring. Compose inside <Field>.
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Render as a multiline textarea. @default "input" */
  as?: "input" | "textarea";
  invalid?: boolean;
  style?: React.CSSProperties;
}

export function Input(props: InputProps): JSX.Element;
