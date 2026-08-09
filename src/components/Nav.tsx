import { Link } from 'react-router-dom'
import { GithubIcon, LinkedinIcon, MailIcon } from './icons'


const links = [
  // { href: '/#about', label: 'About' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#contact', label: 'Contact' },
  { href: '/resume', label: 'Resume' },
]

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link
          to="/#top"
          className="font-mono text-sm font-medium tracking-tight text-bone/90 transition-colors hover:text-ember-300"
        >
          eric<span className="text-ember-500">.</span>apostal
        </Link>

        <div className="hidden items-center gap-8 rounded-full border border-white/5 bg-char/60 px-6 py-2.5 backdrop-blur-md md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="text-sm text-fog transition-colors hover:text-ember-300"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/ericapostal"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-fog transition-colors hover:text-ember-300"
          >
            <GithubIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href="https://www.linkedin.com/in/eric-apostal-b87988226/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-fog transition-colors hover:text-ember-300"
          >
            <LinkedinIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href="mailto:eric@rubiscoapp.com"
            aria-label="Email"
            className="text-fog transition-colors hover:text-ember-300"
          >
            <MailIcon className="h-[18px] w-[18px]" />
          </a>
        </div>
      </nav>
    </header>
  )
}
