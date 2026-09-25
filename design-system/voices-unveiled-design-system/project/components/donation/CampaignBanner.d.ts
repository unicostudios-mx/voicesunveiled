import * as React from "react";

/**
 * Campaign alert banner for urgent fundraising. Warm but serious (midnight
 * ground, gold accents) — never alarmist red. Optional progress bar.
 * @startingPoint section="Donation" subtitle="Urgent campaign banner with progress" viewport="900x200"
 */
export interface CampaignBannerProps {
  /** @default "Urgent" */
  eyebrow?: string;
  title: React.ReactNode;
  body?: React.ReactNode;
  /** Amount raised so far (shows progress bar when paired with goal) */
  raised?: number;
  goal?: number;
  /** @default "Donate Now" */
  ctaLabel?: string;
  onCta?: () => void;
  style?: React.CSSProperties;
}

export function CampaignBanner(props: CampaignBannerProps): JSX.Element;
