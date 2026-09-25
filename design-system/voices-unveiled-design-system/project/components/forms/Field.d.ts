import * as React from "react";

/**
 * Form field wrapper providing a visible label (accessibility requirement),
 * optional hint, and error message. Wires label htmlFor to the child input id.
 * @startingPoint section="Forms" subtitle="Labelled field with hint & error" viewport="700x180"
 */
export interface FieldProps {
  label: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  required?: boolean;
  /** A single form control (e.g. <Input/>). */
  children: React.ReactElement;
  style?: React.CSSProperties;
}

export function Field(props: FieldProps): JSX.Element;
