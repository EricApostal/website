export interface ExperienceEntry {
  role: string
  company: string
  period: string
  location: string
  bullets: string[]
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Lead Software Engineer, Flutter',
    company: 'EpicHire',
    period: 'Jan 2026 — Present',
    location: 'Raleigh, NC · On-site',
    bullets: [
      'Architect and scale a production Flutter platform serving 100+ companies and 30,000+ students, owning features end-to-end from Figma to production.',
      'Ship WebAssembly compilation for a fast, consistent web experience, and unify Android + Web on a single codebase.',
      'Build a real-time messaging system on sockets and an SPA backed by service workers for persistent app state.',
      'Engineer a Go-based SEO templating engine for dynamic metadata injection — full search-engine indexability despite being an SPA.',
    ],
  },
  {
    role: 'Mobile Software Engineer Intern',
    company: 'EpicHire',
    period: 'May 2025 — Jan 2026',
    location: 'Raleigh, NC',
    bullets: [
      'Designed a modern app foundation from the ground up for performance and maintainability.',
      'Worked with senior engineers to keep close platform parity across a seamless user experience.',
      'Maintained a production Next.js site and designed new backend endpoints for a major service overhaul.',
    ],
  },
]
