import * as React from "react";

/**
 * Impact statistic card: big serif number, gold accent rule, short caption.
 * @startingPoint section="Cards" subtitle="Impact statistic with gold accent" viewport="700x200"
 */
export interface ImpactCardProps {
  /** The headline figure, e.g. "115" or "115+" */
  value: React.ReactNode;
  /** Short explanatory caption, e.g. "Scholarships awarded" */
  label: React.ReactNode;
  /** Optional small icon above the number (terracotta) */
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}

export function ImpactCard(props: ImpactCardProps): JSX.Element;
