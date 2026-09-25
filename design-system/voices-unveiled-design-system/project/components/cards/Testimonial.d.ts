import * as React from "react";

/**
 * Large testimonial block — big serif quote, terracotta quote mark, minimal
 * attribution, optional CTA below ("Support more students like Ehsaneh").
 * @startingPoint section="Cards" subtitle="Hero testimonial with serif quote" viewport="700x340"
 */
export interface TestimonialProps {
  quote: React.ReactNode;
  name: string;
  /** @default "Afghanistan" */
  detail?: string;
  /** Optional CTA node rendered below the attribution */
  cta?: React.ReactNode;
  /** Background ground. @default "ivory" */
  tone?: "ivory" | "sage" | "dark";
  style?: React.CSSProperties;
}

export function Testimonial(props: TestimonialProps): JSX.Element;
