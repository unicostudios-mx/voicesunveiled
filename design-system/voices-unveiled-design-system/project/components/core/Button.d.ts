import * as React from "react";

/**
 * Voices Unveiled action button. Primary CTAs (Donate, Sponsor a Student) use
 * `primary`/`donate`; supporting actions use `secondary`; low-pressure actions
 * (newsletter, read more) use `soft`.
 *
 * @startingPoint section="Core" subtitle="Pill buttons — primary, secondary, soft, ghost" viewport="700x160"
 */
export interface ButtonProps {
  children: React.ReactNode;
  /** Visual style. @default "primary" */
  variant?: "primary" | "secondary" | "soft" | "ghost" | "donate";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
