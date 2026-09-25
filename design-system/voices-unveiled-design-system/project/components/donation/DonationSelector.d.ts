import * as React from "react";

export interface DonationTier {
  amount: number;
  impact: string;
}

/**
 * Donation impact selector: pick an amount, see what it makes possible, toggle
 * monthly giving. Includes 501(c)(3) tax-deductibility line.
 * @startingPoint section="Donation" subtitle="Amount selector with impact + monthly toggle" viewport="700x460"
 */
export interface DonationSelectorProps {
  /** Defaults to the canonical $25–$1,000 brand tiers. */
  tiers?: DonationTier[];
  /** @default 100 */
  defaultAmount?: number;
  /** @default "Donate Now" */
  ctaLabel?: string;
  onDonate?: (sel: { amount: number; monthly: boolean }) => void;
  style?: React.CSSProperties;
}

export function DonationSelector(props: DonationSelectorProps): JSX.Element;
