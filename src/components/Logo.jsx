'use client'

// LM monogram — recreation of Linor's business-card logo (interlocking
// hollow gold L + M). Scales cleanly; swap for the original vector any time.
export default function Logo({ size = 48, withWordmark = false, className = '' }) {
  return (
    <span className={`logo ${className}`} aria-label="Linor Mor">
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        role="img"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="lm-gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f0dca6" />
            <stop offset="0.5" stopColor="#d9b96b" />
            <stop offset="1" stopColor="#c9a227" />
          </linearGradient>
        </defs>

        {/* M — pointed-peak, on the right */}
        <path
          d="M40 86 V26 L58 54 L76 26 V86"
          stroke="url(#lm-gold)"
          strokeWidth="6"
          strokeLinejoin="miter"
          strokeLinecap="square"
        />
        {/* L — bold, tucked lower-left, foot running under the M */}
        <path
          d="M24 34 V80 H60"
          stroke="url(#lm-gold)"
          strokeWidth="9"
          strokeLinejoin="miter"
          strokeLinecap="square"
        />
      </svg>

      {withWordmark && (
        <span className="logo-wordmark">
          <span className="logo-name">Linor Mor</span>
          <span className="logo-role">Marketing Operations</span>
        </span>
      )}
    </span>
  )
}
