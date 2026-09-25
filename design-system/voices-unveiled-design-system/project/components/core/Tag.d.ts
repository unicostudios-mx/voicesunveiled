import * as React from "react";

/**
 * Small pill label for program categories, story topics, and filters.
 * @startingPoint section="Core" subtitle="Category & topic pills in brand tones" viewport="700x120"
 */
export interface TagProps {
  children: React.ReactNode;
  /** @default "plum" */
  tone?: "plum" | "terracotta" | "gold" | "sage" | "midnight" | "neutral";
  style?: React.CSSProperties;
}

export function Tag(props: TagProps): JSX.Element;
