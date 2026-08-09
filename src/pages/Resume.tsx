import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Reveal } from '../components/Reveal'
import { ArrowLeftIcon, DownloadIcon, ExternalLinkIcon, FileTextIcon } from '../components/icons'

const RESUME_PDF = '/Eric-Apostal-Resume.pdf'
const RESUME_DOWNLOAD_NAME = 'Eric Apostal - Resume.pdf'

export function Resume() {
  return (
    <main className="relative">
      <section className="mx-auto max-w-4xl px-6 pb-20 pt-32 md:px-10 md:pt-40">
        <Reveal>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-smoke transition-colors hover:text-ember-300"
          >
            <ArrowLeftIcon className="h-4 w-4" /> Back to portfolio
          </Link>
        </Reveal>

        <Reveal delay={0.06}>
          <h1 className="mt-6 text-4xl font-semibold text-balance md:text-5xl">
            <span className="text-gradient-ember">Resume</span>
          </h1>
          <p className="mt-3 text-fog">Eric Apostal — Software Engineer, Raleigh NC</p>
        </Reveal>

        <Reveal delay={0.12} className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={RESUME_PDF}
            download={RESUME_DOWNLOAD_NAME}
            className="flex items-center gap-2 rounded-full bg-gradient-to-br from-ember-300 to-ember-700 px-6 py-3 text-sm font-semibold text-void shadow-[0_0_30px_-6px_rgba(255,107,53,0.55)] transition-transform hover:scale-105"
          >
            <DownloadIcon className="h-4 w-4" /> Download PDF
          </a>
          <a
            href={RESUME_PDF}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-bone/90 transition-colors hover:border-ember-500/40 hover:text-ember-300"
          >
            <ExternalLinkIcon className="h-4 w-4" /> Open in new tab
          </a>
        </Reveal>

        <Reveal delay={0.18} className="mt-10 hidden md:block">
          <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02]">
            <iframe
              src={`${RESUME_PDF}#view=FitH`}
              title="Eric Apostal — Resume"
              className="h-[80vh] w-full"
            />
          </div>
        </Reveal>

        <Reveal delay={0.18} className="mt-10 md:hidden">
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6 py-16 text-center">
            <FileTextIcon className="h-12 w-12 text-ember-300/80" />
            <div>
              <p className="text-bone">Eric Apostal — Resume.pdf</p>
              <p className="mt-1 text-sm text-smoke">Tap below to view or download</p>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  )
}
