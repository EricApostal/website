import type { ReactNode } from 'react'
import bonfireHero from '../assets/img/bonfire-hero.webp'
import flutterbirdPreview from '../assets/img/flutterbird-preview.webp'
import { Reveal } from './Reveal'
import { ExternalLinkIcon, FlutterIcon, GithubIcon, StarIcon } from './icons'
import {
  bonfirePlatforms,
  bonfireStack,
  flutterbirdPlatforms,
  flutterbirdStack,
  type PlatformSupport,
} from '../data/projects'

function PlatformBadges({ platforms }: { platforms: PlatformSupport[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {platforms.map((p) => (
        <span
          key={p.label}
          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[11px] ${p.level === 'full'
            ? 'border-ember-500/25 bg-ember-500/10 text-ember-100'
            : 'border-white/10 bg-white/[0.03] text-smoke'
            }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${p.level === 'full' ? 'bg-ember-300' : 'bg-smoke'}`}
          />
          {p.label}
        </span>
      ))}
    </div>
  )
}

function StackChips({ stack }: { stack: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {stack.map((s) => (
        <span key={s} className="rounded-md border border-white/5 bg-white/[0.02] px-2.5 py-1 text-xs text-fog">
          {s}
        </span>
      ))}
    </div>
  )
}

function ContributionCard({
  href,
  icon,
  name,
  description,
  stars,
}: {
  href: string
  icon: ReactNode
  name: string
  description: string
  stars: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex flex-wrap items-center gap-4 rounded-2xl border border-white/[0.06] px-6 py-5 transition-colors hover:border-ember-500/25"
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.03]">
        {icon}
      </div>
      <p className="flex-1 text-sm text-fog">
        Also contributing to <span className="text-bone">{name}</span> — {description}
      </p>
      <div className="flex items-center gap-1.5 font-mono text-xs text-ember-300/90">
        <StarIcon className="h-3.5 w-3.5" /> {stars}
      </div>
    </a>
  )
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-32 md:px-10">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-ember-300/80">Projects</p>
        <h2 className="mt-4 text-3xl font-semibold text-balance md:text-4xl">
          Some of my recent projects
        </h2>
        <p className="mt-3 text-fog">
          A non-exhaustive list of my recent projects and contributions.
        </p>
      </Reveal>

      {/* Bonfire */}
      <Reveal delay={0.1} className="mt-16">
        <article className="group grid gap-10 rounded-3xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent p-6 md:grid-cols-2 md:p-10">
          <div className="h-fit self-center overflow-hidden rounded-2xl border border-white/5">
            <img
              src={bonfireHero}
              alt="Bonfire app graphic"
              className="aspect-[1400/1130] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-bone md:text-3xl">Bonfire</h3>
            <p className="mt-1.5 font-mono text-sm text-ember-300/90">
              What if Discord was blazingly fast?
            </p>
            <p className="mt-4 leading-relaxed text-fog">
              An extremely fast, fully rebuilt Discord client for all platforms. Includes{' '}
              <span className="text-bone">firebridge</span>, a fork of the <span className="text-bone">nyxx</span>{' '}
              bot API forked to support user tokens. Full media system powered by media_kit. Full
              custom implementations of many unqiue Discord features, such as overlapping panels,
              with much less overhead.
            </p>

            <div className="mt-6 space-y-3">
              <PlatformBadges platforms={bonfirePlatforms} />
              <StackChips stack={bonfireStack} />
            </div>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="https://github.com/EricApostal/bonfire"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-bone transition-colors hover:border-ember-500/40 hover:text-ember-300"
              >
                <GithubIcon className="h-4 w-4" /> View code
              </a>
              <a
                href="https://app.openbonfire.dev/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-bone transition-colors hover:border-ember-500/40 hover:text-ember-300"
              >
                <ExternalLinkIcon className="h-4 w-4" /> Try it live
              </a>
              <a
                href="https://discord.gg/QafRarw25u"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-smoke transition-colors hover:text-ember-300"
              >
                Discord →
              </a>
            </div>
          </div>
        </article>
      </Reveal>

      {/* FlutterBird */}
      <Reveal delay={0.1} className="mt-8">
        <article className="group grid gap-10 rounded-3xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent p-6 md:grid-cols-2 md:p-10">
          <div className="order-last h-fit self-center overflow-hidden rounded-2xl border border-white/5 md:order-first">
            <img
              src={flutterbirdPreview}
              alt="FlutterBird browser preview"
              className="aspect-[1400/855] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-bone md:text-3xl">FlutterBird</h3>
            <p className="mt-1.5 font-mono text-sm text-ember-300/90">A browser engine, embedded in Flutter</p>
            <p className="mt-4 leading-relaxed text-fog">
              An experimental Flutter browser built on the{' '}
              <span className="text-bone">Ladybird</span> engine. Uses GPU buffers to composite
              web content extremely fast. <span className="text-bone">One of the only custom browsers in history to ever support iOS.</span>
            </p>

            <div className="mt-6 space-y-3">
              <PlatformBadges platforms={flutterbirdPlatforms} />
              <StackChips stack={flutterbirdStack} />
            </div>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="https://github.com/ericapostal/flutterbird"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-bone transition-colors hover:border-ember-500/40 hover:text-ember-300"
              >
                <GithubIcon className="h-4 w-4" /> View code
              </a>
            </div>
          </div>
        </article>
      </Reveal>


      <Reveal delay={0.1} className="mt-8 space-y-4">
        <ContributionCard
          href="https://github.com/media-kit/media-kit"
          icon={<GithubIcon className="h-5 w-5 text-bone/80" />}
          name="media-kit"
          description="the cross-platform video & audio engine powering playback across the Flutter ecosystem."
          stars="1.8k+"
        />
        <ContributionCard
          href="https://github.com/flutter/flutter"
          icon={<FlutterIcon className="h-5 w-5" />}
          name="flutter"
          description="Google's UI toolkit for building natively compiled apps from a single codebase."
          stars="170k+"
        />
      </Reveal>
    </section>
  )
}
