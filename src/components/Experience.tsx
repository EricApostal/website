import { experience } from '../data/experience'
import { Reveal } from './Reveal'

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-3xl px-6 py-32 md:px-10">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-ember-300/80">Experience</p>
      </Reveal>

      <div className="mt-10 space-y-12">
        {experience.map((entry, i) => (
          <Reveal key={entry.role} delay={i * 0.08}>
            <div className="relative border-l border-white/10 pl-8">
              <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-ember-500 shadow-[0_0_12px_2px_rgba(255,107,53,0.6)]" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-bone">{entry.role}</h3>
                <span className="font-mono text-xs text-smoke">{entry.period}</span>
              </div>
              <p className="mt-0.5 text-sm text-ember-300/90">
                {entry.company} · {entry.location}
              </p>
              <ul className="mt-4 space-y-2.5">
                {entry.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-[15px] leading-relaxed text-fog">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-smoke" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
