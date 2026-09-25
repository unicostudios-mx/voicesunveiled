import * as React from "react";

/** Solid uppercase status/count badge — stronger emphasis than Tag. */
export interface BadgeProps {
  children: React.ReactNode;
  /** @default "plum" */
  tone?: "plum" | "gold" | "terracotta" | "success" | "danger";
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
