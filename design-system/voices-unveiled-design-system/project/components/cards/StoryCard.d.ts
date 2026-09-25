import * as React from "react";

/**
 * Student story card: minimal personal details + a serif quote + a
 * donation-linked CTA. Centers agency and resilience, never trauma.
 * Pair with a <SafetyNote/> on story pages.
 * @startingPoint section="Cards" subtitle="Student story with serif quote & CTA" viewport="700x320"
 */
export interface StoryCardProps {
  name: string;
  age?: number | string;
  /** @default "Afghanistan" */
  country?: string;
  quote: string;
  /** Optional portrait image URL */
  image?: string;
  /** @default "Read Her Story" */
  ctaLabel?: string;
  onCta?: () => void;
  style?: React.CSSProperties;
}

export function StoryCard(props: StoryCardProps): JSX.Element;
