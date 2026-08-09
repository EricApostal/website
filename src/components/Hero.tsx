import { motion } from 'framer-motion'
import { ChevronDownIcon, GithubIcon, LinkedinIcon } from './icons'

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col items-center justify-center px-6 text-center">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mb-5 font-mono text-xs uppercase tracking-[0.35em] text-ember-300/80"
      >
        Software Engineer · Raleigh, NC
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-5xl font-semibold tracking-tight text-balance sm:text-6xl md:text-7xl"
      >
        Eric <span className="text-gradient-ember">Apostal</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
        className="mt-6 max-w-xl text-balance text-lg text-fog md:text-xl"
      >
        Building software for{' '}
        <span className="text-bone">humans.</span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="#projects"
          className="rounded-full bg-gradient-to-br from-ember-300 to-ember-700 px-6 py-3 text-sm font-semibold text-void shadow-[0_0_30px_-6px_rgba(255,107,53,0.55)] transition-transform hover:scale-105"
        >
          See the projects
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
      </motion.div>

      <motion.a
        href="#projects"
        aria-label="Scroll to Projects"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 text-smoke transition-colors hover:text-ember-300"
      >
        <ChevronDownIcon className="h-6 w-6" />
      </motion.a>
    </section>
  )
}
