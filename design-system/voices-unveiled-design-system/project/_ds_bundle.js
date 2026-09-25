/* @ds-bundle: {"format":3,"namespace":"VoicesUnveiledDesignSystem_cb8f0b","components":[{"name":"ImpactCard","sourcePath":"components/cards/ImpactCard.jsx"},{"name":"StoryCard","sourcePath":"components/cards/StoryCard.jsx"},{"name":"Testimonial","sourcePath":"components/cards/Testimonial.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"SafetyNote","sourcePath":"components/core/SafetyNote.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"CampaignBanner","sourcePath":"components/donation/CampaignBanner.jsx"},{"name":"DonationSelector","sourcePath":"components/donation/DonationSelector.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"components/cards/ImpactCard.jsx":"dfd87ed9f06a","components/cards/StoryCard.jsx":"d97907da336b","components/cards/Testimonial.jsx":"1e4d090bd3ea","components/core/Badge.jsx":"1536043ddaf6","components/core/Button.jsx":"3f27c0a7e324","components/core/SafetyNote.jsx":"32c9f98223f8","components/core/Tag.jsx":"ad53486ae702","components/donation/CampaignBanner.jsx":"e5406fd9893c","components/donation/DonationSelector.jsx":"f254f88588c6","components/forms/Field.jsx":"1fa5d45fce90","components/forms/Input.jsx":"0b823b2968a5","ui_kits/website/Decor.jsx":"f600630300cb","ui_kits/website/DonatePage.jsx":"8d085d40f69b","ui_kits/website/HomePage.jsx":"6047303f838c","ui_kits/website/ImpactStories.jsx":"a75c49a295e7","ui_kits/website/SiteChrome.jsx":"61171705971e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VoicesUnveiledDesignSystem_cb8f0b = window.VoicesUnveiledDesignSystem_cb8f0b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/ImpactCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Impact statistic card — large plum number, gold accent rule, short caption.
 * Used on homepage, impact, and donation pages.
 */
function ImpactCard({
  value,
  label,
  icon = null,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-sm)",
      padding: "26px 24px",
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--terracotta)",
      marginBottom: "2px"
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 700,
      fontSize: "44px",
      lineHeight: 1,
      color: "var(--plum)"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "32px",
      height: "3px",
      borderRadius: "2px",
      background: "var(--gold)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "15px",
      lineHeight: 1.45,
      color: "var(--text-muted)"
    }
  }, label));
}
Object.assign(__ds_scope, { ImpactCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ImpactCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/Testimonial.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Large testimonial block — one of the brand's strongest emotional assets.
 * Big serif quote, terracotta quote mark, minimal attribution.
 */
function Testimonial({
  quote,
  name,
  detail = "Afghanistan",
  cta = null,
  tone = "ivory",
  style = {},
  ...rest
}) {
  const grounds = {
    ivory: {
      background: "var(--ivory)",
      color: "var(--text-strong)",
      quoteColor: "var(--plum)"
    },
    sage: {
      background: "var(--sage-100)",
      color: "var(--text-strong)",
      quoteColor: "var(--plum)"
    },
    dark: {
      background: "var(--midnight)",
      color: "var(--ivory)",
      quoteColor: "var(--ivory)"
    }
  };
  const g = grounds[tone];
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      background: g.background,
      borderRadius: "var(--radius-xl)",
      padding: "44px 48px",
      position: "relative",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "72px",
      lineHeight: 0.6,
      color: "var(--terracotta)",
      display: "block",
      marginBottom: "8px"
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-serif)",
      fontSize: "26px",
      lineHeight: 1.45,
      color: g.quoteColor
    }
  }, quote), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: "22px",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: "16px",
      color: g.color
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "14px",
      color: tone === "dark" ? "rgba(250,246,239,0.7)" : "var(--text-muted)"
    }
  }, detail)), cta && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "24px"
    }
  }, cta));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Testimonial.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  plum: {
    background: "var(--plum)",
    color: "var(--ivory)"
  },
  gold: {
    background: "var(--gold)",
    color: "var(--charcoal)"
  },
  terracotta: {
    background: "var(--terracotta)",
    color: "#fff"
  },
  success: {
    background: "var(--success)",
    color: "#fff"
  },
  danger: {
    background: "var(--danger)",
    color: "#fff"
  }
};

/** Solid status/count badge — stronger than a Tag. */
function Badge({
  children,
  tone = "plum",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      fontFamily: "var(--font-sans)",
      fontSize: "11px",
      fontWeight: 700,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      padding: "4px 9px",
      borderRadius: "var(--radius-pill)",
      ...TONES[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: "9px 18px",
    fontSize: "14px"
  },
  md: {
    padding: "13px 26px",
    fontSize: "15px"
  },
  lg: {
    padding: "16px 32px",
    fontSize: "16px"
  }
};

/**
 * Voices Unveiled primary action button.
 * Variants: primary (Deep Plum), secondary (plum outline),
 * soft (warm beige), ghost, donate (always-visible plum).
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  onClick,
  type = "button",
  style = {},
  ...rest
}) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "9px",
    fontFamily: "var(--font-sans)",
    fontWeight: 600,
    lineHeight: 1,
    border: "1.5px solid transparent",
    borderRadius: "var(--radius-pill)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "background var(--dur) var(--ease-out), color var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out), transform var(--dur-fast) var(--ease-out)",
    width: fullWidth ? "100%" : "auto",
    whiteSpace: "nowrap",
    ...SIZES[size]
  };
  const variants = {
    primary: {
      background: "var(--plum)",
      color: "var(--text-on-primary)"
    },
    donate: {
      background: "var(--plum)",
      color: "var(--text-on-primary)"
    },
    secondary: {
      background: "transparent",
      color: "var(--plum)",
      borderColor: "var(--plum)"
    },
    soft: {
      background: "var(--terracotta-100)",
      color: "var(--plum)"
    },
    ghost: {
      background: "transparent",
      color: "var(--plum)"
    }
  };
  const hovers = {
    primary: (e, on) => e.currentTarget.style.background = on ? "var(--plum-700)" : "var(--plum)",
    donate: (e, on) => e.currentTarget.style.background = on ? "var(--plum-700)" : "var(--plum)",
    secondary: (e, on) => e.currentTarget.style.background = on ? "rgba(75,33,66,0.06)" : "transparent",
    soft: (e, on) => e.currentTarget.style.background = on ? "#EACBBC" : "var(--terracotta-100)",
    ghost: (e, on) => e.currentTarget.style.background = on ? "rgba(75,33,66,0.06)" : "transparent"
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    onMouseEnter: e => !disabled && hovers[variant](e, true),
    onMouseLeave: e => !disabled && hovers[variant](e, false),
    onMouseDown: e => !disabled && (e.currentTarget.style.transform = "scale(0.98)"),
    onMouseUp: e => !disabled && (e.currentTarget.style.transform = "scale(1)"),
    onFocus: e => e.currentTarget.style.boxShadow = "var(--shadow-focus)",
    onBlur: e => e.currentTarget.style.boxShadow = "none"
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/cards/StoryCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Student story card — ivory ground, serif quote, minimal details,
 * donation-linked CTA. Focuses on agency and resilience, not trauma.
 */
function StoryCard({
  name,
  age,
  country = "Afghanistan",
  quote,
  image = null,
  ctaLabel = "Read Her Story",
  onCta,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--ivory)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      boxShadow: "var(--shadow-sm)",
      ...style
    }
  }, rest), image && /*#__PURE__*/React.createElement("div", {
    style: {
      height: "180px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: `Portrait of ${name}`,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "22px 24px",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: "16px",
      color: "var(--text-strong)"
    }
  }, name, age ? `, ${age}` : ""), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "13px",
      color: "var(--text-muted)"
    }
  }, country)), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-serif)",
      fontStyle: "italic",
      fontSize: "18px",
      lineHeight: 1.5,
      color: "var(--plum)",
      flex: 1
    }
  }, "\u201C", quote, "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "sm",
    onClick: onCta
  }, ctaLabel))));
}
Object.assign(__ds_scope, { StoryCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/StoryCard.jsx", error: String((e && e.message) || e) }); }

// components/core/SafetyNote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Required notice wherever student stories/images appear.
 * Soft sage ground = care. Defaults to the canonical brand copy.
 */
function SafetyNote({
  children = "Some names, images, or identifying details may be changed to protect student safety.",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "note",
    style: {
      display: "flex",
      gap: "10px",
      alignItems: "flex-start",
      background: "var(--sage-100)",
      border: "1px solid rgba(105,124,99,0.25)",
      borderRadius: "var(--radius-md)",
      padding: "12px 16px",
      fontFamily: "var(--font-sans)",
      fontSize: "13.5px",
      lineHeight: 1.5,
      color: "#3F4D3C",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#5A6E54",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flex: "none",
      marginTop: "1px"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
  })), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { SafetyNote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SafetyNote.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  plum: {
    background: "rgba(75,33,66,0.08)",
    color: "var(--plum)"
  },
  terracotta: {
    background: "var(--terracotta-100)",
    color: "var(--terracotta-700)"
  },
  gold: {
    background: "var(--gold-100)",
    color: "#8A6A14"
  },
  sage: {
    background: "var(--sage-100)",
    color: "#4A5C46"
  },
  midnight: {
    background: "rgba(31,42,68,0.08)",
    color: "var(--midnight)"
  },
  neutral: {
    background: "var(--warm-gray-100)",
    color: "var(--text-muted)"
  }
};

/** Small pill label for program categories, topics, filters. */
function Tag({
  children,
  tone = "plum",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      fontFamily: "var(--font-sans)",
      fontSize: "13px",
      fontWeight: 500,
      padding: "5px 12px",
      borderRadius: "var(--radius-pill)",
      ...TONES[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/donation/CampaignBanner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Campaign alert banner for urgent fundraising moments. Warm but serious —
 * not aggressive, avoids red. Optional progress bar.
 */
function CampaignBanner({
  eyebrow = "Urgent",
  title,
  body,
  raised = null,
  goal = null,
  ctaLabel = "Donate Now",
  onCta,
  style = {},
  ...rest
}) {
  const pct = raised != null && goal ? Math.min(100, Math.round(raised / goal * 100)) : null;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--midnight)",
      color: "var(--ivory)",
      borderRadius: "var(--radius-lg)",
      padding: "28px 32px",
      fontFamily: "var(--font-sans)",
      display: "flex",
      flexWrap: "wrap",
      gap: "24px",
      alignItems: "center",
      justifyContent: "space-between",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 360px",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      textTransform: "uppercase",
      letterSpacing: "0.14em",
      fontSize: "11px",
      fontWeight: 700,
      color: "var(--gold)",
      marginBottom: "8px"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "24px",
      fontWeight: 700,
      margin: "0 0 6px",
      lineHeight: 1.25
    }
  }, title), body && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "15px",
      lineHeight: 1.5,
      color: "rgba(250,246,239,0.82)"
    }
  }, body), pct != null && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "16px",
      maxWidth: "440px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "8px",
      borderRadius: "var(--radius-pill)",
      background: "rgba(250,246,239,0.18)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: "100%",
      background: "var(--gold)",
      borderRadius: "var(--radius-pill)",
      transition: "width var(--dur-slow) var(--ease-out)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "13px",
      marginTop: "7px",
      color: "rgba(250,246,239,0.82)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "$", raised.toLocaleString(), " raised"), /*#__PURE__*/React.createElement("span", null, "Goal $", goal.toLocaleString())))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "soft",
    size: "lg",
    onClick: onCta
  }, ctaLabel)));
}
Object.assign(__ds_scope, { CampaignBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/donation/CampaignBanner.jsx", error: String((e && e.message) || e) }); }

// components/donation/DonationSelector.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DEFAULT_TIERS = [{
  amount: 25,
  impact: "Internet access for one student"
}, {
  amount: 50,
  impact: "Course materials and internet support"
}, {
  amount: 100,
  impact: "Emergency intervention or family support"
}, {
  amount: 300,
  impact: "One trimester of education for one student"
}, {
  amount: 1000,
  impact: "A year of education, coaching & counseling"
}];

/**
 * Donation impact selector — choose an amount and see what it makes possible,
 * with a monthly-giving toggle. Shows "where your money goes" by tier.
 */
function DonationSelector({
  tiers = DEFAULT_TIERS,
  defaultAmount = 100,
  ctaLabel = "Donate Now",
  onDonate,
  style = {},
  ...rest
}) {
  const [amount, setAmount] = React.useState(defaultAmount);
  const [monthly, setMonthly] = React.useState(false);
  const selected = tiers.find(t => t.amount === amount) || tiers[0];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-md)",
      padding: "28px",
      maxWidth: "440px",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      background: "var(--ivory-200)",
      borderRadius: "var(--radius-pill)",
      padding: "4px",
      marginBottom: "20px"
    }
  }, [["One-time", false], ["Monthly", true]].map(([lbl, val]) => /*#__PURE__*/React.createElement("button", {
    key: lbl,
    onClick: () => setMonthly(val),
    style: {
      border: "none",
      cursor: "pointer",
      padding: "8px 20px",
      borderRadius: "var(--radius-pill)",
      fontSize: "14px",
      fontWeight: 600,
      fontFamily: "inherit",
      background: monthly === val ? "var(--plum)" : "transparent",
      color: monthly === val ? "var(--ivory)" : "var(--text-muted)",
      transition: "background var(--dur) var(--ease-out)"
    }
  }, lbl))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "10px",
      marginBottom: "16px"
    }
  }, tiers.map(t => {
    const on = t.amount === amount;
    return /*#__PURE__*/React.createElement("button", {
      key: t.amount,
      onClick: () => setAmount(t.amount),
      style: {
        cursor: "pointer",
        padding: "14px 0",
        borderRadius: "var(--radius-md)",
        fontFamily: "var(--font-serif)",
        fontWeight: 700,
        fontSize: "20px",
        background: on ? "var(--plum)" : "var(--ivory)",
        color: on ? "var(--ivory)" : "var(--plum)",
        border: on ? "1.5px solid var(--plum)" : "1.5px solid var(--border-default)",
        transition: "all var(--dur) var(--ease-out)"
      }
    }, "$", t.amount.toLocaleString());
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px",
      alignItems: "flex-start",
      background: "var(--sage-100)",
      borderRadius: "var(--radius-md)",
      padding: "12px 14px",
      marginBottom: "20px",
      minHeight: "44px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--terracotta)",
      fontWeight: 700,
      flex: "none"
    }
  }, "\u2192"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14.5px",
      lineHeight: 1.4,
      color: "#3F4D3C"
    }
  }, selected.impact)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: () => onDonate && onDonate({
      amount,
      monthly
    })
  }, ctaLabel, " \u2014 $", selected.amount.toLocaleString(), monthly ? "/mo" : ""), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "12.5px",
      color: "var(--text-muted)",
      textAlign: "center",
      margin: "12px 0 0",
      lineHeight: 1.5
    }
  }, "Voices Unveiled is a 501(c)(3). Your gift is tax-deductible."));
}
Object.assign(__ds_scope, { DonationSelector });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/donation/DonationSelector.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _id = 0;

/** Form field wrapper: visible label, optional hint, error message. */
function Field({
  label,
  hint,
  error,
  required = false,
  children,
  style = {},
  ...rest
}) {
  const id = React.useMemo(() => `vu-field-${++_id}`, []);
  const child = React.isValidElement(children) ? React.cloneElement(children, {
    id,
    invalid: !!error
  }) : children;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      fontSize: "14px",
      fontWeight: 600,
      color: "var(--text-strong)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--terracotta)",
      marginLeft: "3px"
    }
  }, "*")), hint && !error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      color: "var(--text-muted)"
    }
  }, hint), child, error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      color: "var(--danger)"
    }
  }, error));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input / textarea with brand focus ring. Use inside <Field>. */
function Input({
  as = "input",
  invalid = false,
  style = {},
  ...rest
}) {
  const Tag = as;
  const base = {
    width: "100%",
    boxSizing: "border-box",
    fontFamily: "var(--font-sans)",
    fontSize: "16px",
    color: "var(--text-strong)",
    background: "var(--white)",
    border: `1.5px solid ${invalid ? "var(--danger)" : "var(--border-default)"}`,
    borderRadius: "var(--radius-md)",
    padding: as === "textarea" ? "12px 14px" : "12px 14px",
    minHeight: as === "textarea" ? "112px" : "auto",
    resize: as === "textarea" ? "vertical" : undefined,
    outline: "none",
    transition: "border-color var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)"
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      ...base,
      ...style
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = "var(--plum)";
      e.currentTarget.style.boxShadow = "var(--shadow-focus)";
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = invalid ? "var(--danger)" : "var(--border-default)";
      e.currentTarget.style.boxShadow = "none";
    }
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Decor.jsx
try { (() => {
// Decorative brand art — abstract veil / voice-wave motifs used instead of
// stock photography of real people (a deliberate safety + dignity choice).
function VeilArt({
  height = 420,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      position: "relative",
      background: "linear-gradient(150deg, #5A2A4F 0%, #4B2142 45%, #1F2A44 100%)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 400 420",
    preserveAspectRatio: "xMidYMid slice",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("g", {
    fill: "none",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M90 -40 C200 90 120 230 250 460",
    stroke: "#C46A4A",
    strokeWidth: "60",
    opacity: "0.22"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M150 -40 C260 90 180 230 310 460",
    stroke: "#E5B84B",
    strokeWidth: "42",
    opacity: "0.18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M40 -40 C150 90 70 230 200 460",
    stroke: "#A9B8A4",
    strokeWidth: "30",
    opacity: "0.16"
  })), /*#__PURE__*/React.createElement("g", {
    stroke: "#FAF6EF",
    strokeWidth: "1.5",
    opacity: "0.5",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M30 330 Q60 300 90 330 T150 330 T210 330 T270 330"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M30 350 Q60 322 90 350 T150 350 T210 350 T270 350",
    opacity: "0.6"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "320",
    cy: "80",
    r: "4",
    fill: "#E5B84B",
    opacity: "0.7"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "345",
    cy: "120",
    r: "3",
    fill: "#C46A4A",
    opacity: "0.7"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "300",
    cy: "140",
    r: "2.5",
    fill: "#FAF6EF",
    opacity: "0.6"
  })));
}

// A soft image placeholder for where real, consented photography would go.
function PhotoSlot({
  height = 240,
  label = "Photograph",
  tone = "ivory",
  style = {}
}) {
  const bg = tone === "sage" ? "var(--sage-100)" : tone === "terra" ? "var(--terracotta-100)" : "var(--ivory-200)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      borderRadius: "var(--radius-lg)",
      background: bg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px dashed var(--border-default)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "13px",
      color: "var(--text-muted)",
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "9",
    r: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 15-3.5-3.5L9 20"
  })), label));
}
function Eyebrow({
  children,
  color = "var(--terracotta)"
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      textTransform: "uppercase",
      letterSpacing: "0.14em",
      fontSize: "12px",
      fontWeight: 700,
      color,
      fontFamily: "var(--font-sans)",
      marginBottom: "14px"
    }
  }, children);
}
function Section({
  children,
  bg = "transparent",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg,
      padding: "var(--space-9) 0",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 28px"
    }
  }, children));
}
function SerifH2({
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 700,
      fontSize: "40px",
      lineHeight: 1.15,
      color: "var(--text-strong)",
      margin: 0,
      letterSpacing: "-0.01em",
      ...style
    }
  }, children);
}
Object.assign(window, {
  VeilArt,
  PhotoSlot,
  Eyebrow,
  Section,
  SerifH2
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Decor.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/DonatePage.jsx
try { (() => {
// Voices Unveiled donation page — selector + trust + testimonial + FAQ.
const {
  DonationSelector,
  CampaignBanner,
  Testimonial,
  Button
} = window.VoicesUnveiledDesignSystem_cb8f0b;
const FAQ = [["Is my donation tax-deductible?", "Yes. Voices Unveiled is a registered 501(c)(3) nonprofit; your gift is tax-deductible to the full extent allowed by law."], ["Where does my money go?", "Directly to scholarships, internet access, course materials, mental health support, and emergency assistance for Afghan women and girls."], ["Can I give monthly?", "Yes — our Monthly Donors Circle accepts a recurring gift of any amount, providing the steady support our students rely on."]];
function DonatePage() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(CampaignBanner, {
    title: "Help keep Voices Unveiled open.",
    body: "With the withdrawal of U.S. AID, we are one of the few remaining pathways to education for Afghan women. Help us raise $50,000 to continue.",
    raised: 32500,
    goal: 50000
  })), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 0.9fr",
      gap: "56px",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Make a gift"), /*#__PURE__*/React.createElement(SerifH2, {
    style: {
      marginBottom: "16px"
    }
  }, "Your gift keeps education, connection, and hope alive."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "17px",
      lineHeight: 1.65,
      color: "var(--text-body)",
      maxWidth: "var(--measure)",
      marginBottom: "28px"
    }
  }, "Every dollar you invest directly impacts the lives of Afghan women and girls. Choose an amount to see what it makes possible."), /*#__PURE__*/React.createElement(Testimonial, {
    tone: "sage",
    quote: "The mentorship changed how I see myself. I am no longer waiting for permission to learn.",
    name: "Marwa, 22"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: "100px"
    }
  }, /*#__PURE__*/React.createElement(DonationSelector, {
    defaultAmount: 300
  })))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--white)"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Questions"), /*#__PURE__*/React.createElement(SerifH2, {
    style: {
      marginBottom: "28px"
    }
  }, "Giving with confidence."), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--measure)",
      display: "flex",
      flexDirection: "column",
      gap: "4px"
    }
  }, FAQ.map(([q, a]) => /*#__PURE__*/React.createElement("details", {
    key: q,
    style: {
      borderBottom: "1px solid var(--border-subtle)",
      padding: "18px 0"
    }
  }, /*#__PURE__*/React.createElement("summary", {
    style: {
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: "17px",
      color: "var(--text-strong)",
      listStyle: "none"
    }
  }, q), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "15.5px",
      lineHeight: 1.6,
      color: "var(--text-muted)",
      margin: "12px 0 0"
    }
  }, a))))));
}
Object.assign(window, {
  DonatePage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/DonatePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomePage.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Voices Unveiled homepage — composed from DS components + site chrome.
const {
  Button,
  ImpactCard,
  StoryCard,
  Testimonial,
  Tag
} = window.VoicesUnveiledDesignSystem_cb8f0b;
const STORIES = [{
  name: "Arezou",
  age: 27,
  quote: "The course gave me hope and strength to keep learning."
}, {
  name: "Marwa",
  age: 22,
  quote: "I found a community that believes in my future."
}, {
  name: "Sahar",
  age: 30,
  quote: "For the first time, I am leading — not waiting."
}];
const PROGRAMS = [{
  tag: "Education",
  tone: "plum",
  title: "Self-Empowerment Course",
  body: "Two full semesters covering mental health, women's health, leadership, and critical thinking."
}, {
  tag: "Mental health",
  tone: "sage",
  title: "Trauma-Informed Care",
  body: "Professional therapy and regular one-on-one support sessions for students."
}, {
  tag: "Leadership",
  tone: "terracotta",
  title: "Mentorship Programs",
  body: "English, exam prep, data analytics, and computer programming with expert mentors."
}];
function HomePage({
  onDonate,
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.1fr 0.9fr",
      gap: "56px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Voices emerging from silence"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 700,
      fontSize: "56px",
      lineHeight: 1.08,
      letterSpacing: "-0.02em",
      color: "var(--plum)",
      margin: "0 0 20px"
    }
  }, "Keep her learning, healing, and reclaiming her voice."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "20px",
      lineHeight: 1.6,
      color: "var(--text-body)",
      maxWidth: "520px",
      margin: "0 0 32px"
    }
  }, "Voices Unveiled provides free online education, mental health support, and leadership development for Afghan women and girls."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "14px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onDonate
  }, "Sponsor a Student"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNav("Impact")
  }, "See Our Impact"))), /*#__PURE__*/React.createElement(VeilArt, {
    height: 460
  }))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--white)"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "30px",
      lineHeight: 1.45,
      color: "var(--text-strong)",
      maxWidth: "var(--measure)",
      margin: "0 auto",
      textAlign: "center"
    }
  }, "We believe education is a lifeline. When the world closed its doors to Afghan women, we built a new one \u2014 ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: "var(--terracotta)"
    }
  }, "online, free, and safe."))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Our impact in 2024"), /*#__PURE__*/React.createElement(SerifH2, {
    style: {
      marginBottom: "32px"
    }
  }, "The difference your support made."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "20px"
    }
  }, /*#__PURE__*/React.createElement(ImpactCard, {
    value: "115",
    label: "Scholarships raised & awarded"
  }), /*#__PURE__*/React.createElement(ImpactCard, {
    value: "50",
    label: "Students given internet funding"
  }), /*#__PURE__*/React.createElement(ImpactCard, {
    value: "20",
    label: "Intern graduates trained"
  }), /*#__PURE__*/React.createElement(ImpactCard, {
    value: "8",
    label: "Ongoing mentorship programs"
  }))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--white)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: "32px",
      gap: "20px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Student stories"), /*#__PURE__*/React.createElement(SerifH2, null, "Resilience, in their own words.")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => onNav("Stories")
  }, "Explore all stories \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "22px"
    }
  }, STORIES.map(s => /*#__PURE__*/React.createElement(StoryCard, _extends({
    key: s.name
  }, s, {
    onCta: () => onNav("Stories")
  }))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Programs"), /*#__PURE__*/React.createElement(SerifH2, {
    style: {
      marginBottom: "32px"
    }
  }, "How we support our students."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "22px"
    }
  }, PROGRAMS.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.title,
    style: {
      background: "var(--white)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      padding: "26px",
      boxShadow: "var(--shadow-sm)"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: p.tone
  }, p.tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "22px",
      fontWeight: 700,
      color: "var(--text-strong)",
      margin: "16px 0 8px"
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "15px",
      lineHeight: 1.6,
      color: "var(--text-muted)",
      margin: 0
    }
  }, p.body))))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--white)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "860px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Testimonial, {
    quote: "I was not confident enough to speak. Now I believe I am valuable, precious, and need to be heard.",
    name: "Ehsaneh, 28",
    cta: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: onDonate
    }, "Support more students like Ehsaneh")
  }))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--terracotta-100)",
      borderRadius: "var(--radius-xl)",
      padding: "48px 56px",
      display: "flex",
      gap: "32px",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "560px"
    }
  }, /*#__PURE__*/React.createElement(SerifH2, {
    style: {
      marginBottom: "10px"
    }
  }, "Share your skills. Help create a safe learning space."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "17px",
      lineHeight: 1.6,
      color: "var(--text-body)",
      margin: 0
    }
  }, "Teachers, counselors, mentors, and organizers \u2014 there's a place for you.")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav("Volunteer")
  }, "Become a Volunteer"))));
}
Object.assign(window, {
  HomePage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ImpactStories.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Impact + Stories pages for the Voices Unveiled site.
const {
  ImpactCard,
  StoryCard,
  Testimonial,
  SafetyNote,
  Button,
  Tag
} = window.VoicesUnveiledDesignSystem_cb8f0b;
const OUTCOMES = ["Two full semesters of the flagship self-empowerment course", "Trauma-informed therapy for 5 students", "Women's health sessions with doctors from France and the U.S.", "Sustained 2 women's arts programs in Afghanistan"];
function ImpactPage({
  onDonate
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--measure)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Our impact"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 700,
      fontSize: "52px",
      lineHeight: 1.1,
      color: "var(--plum)",
      margin: "0 0 18px",
      letterSpacing: "-0.02em"
    }
  }, "2024 marked a transformative year."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "20px",
      lineHeight: 1.6,
      color: "var(--text-body)",
      margin: 0
    }
  }, "Thanks to your generosity, we created lasting change in the lives of Afghan women and girls."))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "20px"
    }
  }, /*#__PURE__*/React.createElement(ImpactCard, {
    value: "115",
    label: "Scholarships raised & awarded"
  }), /*#__PURE__*/React.createElement(ImpactCard, {
    value: "50",
    label: "Students given internet funding"
  }), /*#__PURE__*/React.createElement(ImpactCard, {
    value: "20",
    label: "Intern graduates trained"
  }), /*#__PURE__*/React.createElement(ImpactCard, {
    value: "8",
    label: "Active volunteers on the team"
  }))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--white)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "48px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Program outcomes"), /*#__PURE__*/React.createElement(SerifH2, {
    style: {
      marginBottom: "20px"
    }
  }, "Shaping futures, responding to needs."), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "14px"
    }
  }, OUTCOMES.map(o => /*#__PURE__*/React.createElement("li", {
    key: o,
    style: {
      display: "flex",
      gap: "12px",
      alignItems: "flex-start",
      fontFamily: "var(--font-sans)",
      fontSize: "16.5px",
      lineHeight: 1.5,
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--terracotta)",
      fontWeight: 700,
      flex: "none",
      marginTop: "1px"
    }
  }, "\u2713"), o)))), /*#__PURE__*/React.createElement(PhotoSlot, {
    height: 320,
    label: "Students learning online",
    tone: "sage"
  }))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--midnight)",
      color: "var(--ivory)",
      borderRadius: "var(--radius-xl)",
      padding: "48px 56px",
      display: "flex",
      gap: "32px",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "560px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "30px",
      fontWeight: 700,
      marginBottom: "10px"
    }
  }, "Read the full 2024 Annual Impact Report."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "16px",
      lineHeight: 1.6,
      color: "rgba(250,246,239,0.8)",
      margin: 0
    }
  }, "Financial transparency and program detail, start to finish.")), /*#__PURE__*/React.createElement(Button, {
    variant: "soft",
    size: "lg"
  }, "Download report (PDF)"))));
}
const ALL_STORIES = [{
  name: "Arezou",
  age: 27,
  quote: "The course gave me hope and strength to keep learning."
}, {
  name: "Marwa",
  age: 22,
  quote: "I found a community that believes in my future."
}, {
  name: "Sahar",
  age: 30,
  quote: "For the first time, I am leading — not waiting."
}, {
  name: "Nadia",
  age: 24,
  quote: "I learned that my voice has value, and people will listen."
}, {
  name: "Freshta",
  age: 19,
  quote: "Studying again gave my days purpose and direction."
}, {
  name: "Roya",
  age: 26,
  quote: "The counseling helped me carry what felt unbearable."
}];
function StoriesPage({
  onDonate
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--measure)",
      marginBottom: "28px"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Student stories"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 700,
      fontSize: "52px",
      lineHeight: 1.1,
      color: "var(--plum)",
      margin: "0 0 18px",
      letterSpacing: "-0.02em"
    }
  }, "Every story is shared with care and consent."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "19px",
      lineHeight: 1.6,
      color: "var(--text-body)",
      margin: "0 0 22px"
    }
  }, "These are journeys of agency, resilience, and transformation."), /*#__PURE__*/React.createElement(SafetyNote, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "22px"
    }
  }, ALL_STORIES.map(s => /*#__PURE__*/React.createElement(StoryCard, _extends({
    key: s.name
  }, s, {
    ctaLabel: "Sponsor a student like her",
    onCta: onDonate
  }))))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--white)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "860px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Testimonial, {
    quote: "I am so touched by the work Voices Unveiled does. Everyone should do anything they can to support them.",
    name: "Zainab Salbi",
    detail: "Founder, Women for Women International",
    cta: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: onDonate
    }, "Donate Now")
  }))));
}
Object.assign(window, {
  ImpactPage,
  StoriesPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ImpactStories.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteChrome.jsx
try { (() => {
// Header + Footer chrome for the Voices Unveiled marketing site.
const {
  Button
} = window.VoicesUnveiledDesignSystem_cb8f0b;
const NAV = ["About", "Programs", "Impact", "Stories", "Volunteer"];
function SiteHeader({
  active,
  onNav,
  onDonate
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      background: "rgba(250,246,239,0.92)",
      backdropFilter: "blur(8px)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 28px",
      height: "76px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav("Home"),
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      cursor: "pointer",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-full.png",
    alt: "Voices Unveiled",
    style: {
      height: "48px",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 700,
      fontSize: "19px",
      color: "var(--plum)",
      letterSpacing: "0.01em"
    }
  }, "Voices Unveiled")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "28px"
    }
  }, NAV.map(item => /*#__PURE__*/React.createElement("a", {
    key: item,
    onClick: () => onNav(item),
    style: {
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: "15px",
      fontWeight: 500,
      color: active === item ? "var(--plum)" : "var(--text-body)",
      borderBottom: active === item ? "2px solid var(--terracotta)" : "2px solid transparent",
      paddingBottom: "2px",
      transition: "color var(--dur) var(--ease-out)"
    }
  }, item)), /*#__PURE__*/React.createElement(Button, {
    variant: "donate",
    size: "sm",
    onClick: onDonate
  }, "Donate"))));
}
function SiteFooter() {
  const cols = [["Explore", ["About", "Programs", "Impact", "Stories"]], ["Take action", ["Donate", "Sponsor a Student", "Volunteer", "Monthly Giving"]], ["Connect", ["Newsletter", "Contact", "Instagram", "LinkedIn"]]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--midnight)",
      color: "var(--ivory)",
      marginTop: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "64px 28px 40px",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
      gap: "40px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 700,
      fontSize: "20px",
      marginBottom: "12px"
    }
  }, "Voices Unveiled"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "14.5px",
      lineHeight: 1.6,
      color: "rgba(250,246,239,0.72)",
      maxWidth: "280px",
      margin: 0
    }
  }, "Education, connection, and hope for Afghan women and girls. Every story is shared with care and consent.")), cols.map(([head, links]) => /*#__PURE__*/React.createElement("div", {
    key: head
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "12px",
      textTransform: "uppercase",
      letterSpacing: "0.12em",
      color: "var(--gold)",
      marginBottom: "14px"
    }
  }, head), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    style: {
      color: "rgba(250,246,239,0.85)",
      textDecoration: "none",
      fontSize: "14.5px",
      cursor: "pointer"
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(250,246,239,0.14)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "20px 28px",
      display: "flex",
      flexWrap: "wrap",
      gap: "12px",
      justifyContent: "space-between",
      fontSize: "13px",
      color: "rgba(250,246,239,0.6)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Voices Unveiled is a registered 501(c)(3) nonprofit \xB7 EIN 00-0000000"), /*#__PURE__*/React.createElement("span", null, "Privacy & Safety \xB7 voicesunveiled.org"))));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteChrome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ImpactCard = __ds_scope.ImpactCard;

__ds_ns.StoryCard = __ds_scope.StoryCard;

__ds_ns.Testimonial = __ds_scope.Testimonial;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.SafetyNote = __ds_scope.SafetyNote;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.CampaignBanner = __ds_scope.CampaignBanner;

__ds_ns.DonationSelector = __ds_scope.DonationSelector;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

})();
