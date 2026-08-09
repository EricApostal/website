export function FlutterBirdMockup({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 320" className={className} role="img" aria-label="FlutterBird browser window mockup">
      <defs>
        <linearGradient id="fb-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#141a20" />
          <stop offset="100%" stopColor="#0c0f13" />
        </linearGradient>
        <linearGradient id="fb-wing" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffb627" />
          <stop offset="100%" stopColor="#ff6b35" />
        </linearGradient>
        <radialGradient id="fb-glow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#ff6b35" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#ff6b35" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect x="0.5" y="0.5" width="479" height="319" rx="14" fill="#0f1216" stroke="#242a30" />

      <rect x="0.5" y="0.5" width="479" height="40" rx="14" fill="#171b20" stroke="#242a30" />
      <circle cx="22" cy="20.5" r="5" fill="#ff6b35" />
      <circle cx="40" cy="20.5" r="5" fill="#3a4a5c" />
      <circle cx="58" cy="20.5" r="5" fill="#3a4a5c" />

      <rect x="84" y="10.5" width="290" height="20" rx="10" fill="#0f1216" stroke="#2a3138" />
      <text x="100" y="24.5" fontFamily="ui-monospace, monospace" fontSize="10.5" fill="#7c8894">
        ladybird://flutterbird
      </text>

      <rect x="0.5" y="40.5" width="479" height="279" fill="url(#fb-sky)" />
      <rect x="0.5" y="40.5" width="479" height="279" fill="url(#fb-glow)" />

      <g transform="translate(240,190)">
        <path
          d="M0 -46c26 4 46 26 46 50 0 10-16 4-22-2-3 10-8 20-24 30-16-10-21-20-24-30-6 6-22 12-22 2 0-24 20-46 46-50Z"
          fill="url(#fb-wing)"
          opacity="0.92"
        />
        <path d="M0 -46c26 4 46 26 46 50 0 10-16 4-22-2-3 10-8 20-24 30" fill="none" stroke="#ffe7c2" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
        <circle cx="0" cy="-10" r="3.5" fill="#0f1216" />
      </g>

      <g opacity="0.5" fontFamily="ui-monospace, monospace" fontSize="9.5" fill="#5b6570">
        <rect x="40" y="70" width="120" height="10" rx="3" fill="#1b2127" />
        <rect x="40" y="88" width="80" height="10" rx="3" fill="#1b2127" />
        <rect x="320" y="70" width="120" height="10" rx="3" fill="#1b2127" />
        <rect x="320" y="88" width="90" height="10" rx="3" fill="#1b2127" />
        <rect x="40" y="240" width="90" height="10" rx="3" fill="#1b2127" />
        <rect x="350" y="240" width="90" height="10" rx="3" fill="#1b2127" />
      </g>
    </svg>
  )
}
