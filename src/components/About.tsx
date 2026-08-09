import { Reveal } from './Reveal'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-32 md:px-10">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-ember-300/80">About</p>
      </Reveal>
      <Reveal delay={0.08}>
        <p className="mt-6 text-2xl leading-relaxed text-balance text-bone md:text-3xl">
          Lead Flutter engineer at{' '}
          <span className="text-gradient-ember font-medium">EpicHire</span>. Passionate
          about code that improves the lives of people.
        </p>
      </Reveal>
      <Reveal delay={0.16}>
        <p className="mt-6 text-lg leading-relaxed text-fog">
          I build software for people.
        </p>
      </Reveal>
    </section>
  )
}
