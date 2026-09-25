import * as React from "react";

/**
 * Required safety/consent notice wherever student stories or images appear.
 * Defaults to the canonical brand copy; sage ground signals care.
 */
export interface SafetyNoteProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function SafetyNote(props: SafetyNoteProps): JSX.Element;
