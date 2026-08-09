import { Reveal } from './Reveal'
import { GithubIcon, LinkedinIcon, MailIcon } from './icons'

export function Footer() {
  return (
    <footer id="contact" className="mx-auto max-w-3xl px-6 pb-24 pt-12 text-center md:px-10">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-ember-300/80">Contact</p>
        <h2 className="mt-5 text-3xl font-semibold text-balance md:text-4xl">
          Building something amazing?{' '}
          <span className="text-gradient-ember">Hit me up.</span>
        </h2>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:eric@rubiscoapp.com"
            className="flex items-center gap-2 rounded-full bg-gradient-to-br from-ember-300 to-ember-700 px-6 py-3 text-sm font-semibold text-void shadow-[0_0_30px_-6px_rgba(255,107,53,0.55)] transition-transform hover:scale-105"
          >
            <MailIcon className="h-4 w-4" /> eric@rubiscoapp.com
          </a>
          <a
            href="https://github.com/ericapostal"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-bone/90 transition-colors hover:border-ember-500/40 hover:text-ember-300"
          >
            <GithubIcon className="h-4 w-4" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/eric-apostal-b87988226/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-bone/90 transition-colors hover:border-ember-500/40 hover:text-ember-300"
          >
            <LinkedinIcon className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </Reveal>

      <p className="mt-20 font-mono text-xs text-smoke/70">
        Eric Apostal — built with React &amp; Bun.
      </p>
    </footer>
  )
}
