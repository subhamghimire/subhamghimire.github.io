import { educationData } from '@/lib/data';
import { SectionHeading } from './section-heading';
import { SectionShell } from './section-shell';

export function Education() {
  return (
    <SectionShell id="education">
      <SectionHeading eyebrow="Education" title="Academic Background" />

      <div className="grid gap-4 sm:grid-cols-2">
        {educationData.map((item) => (
          <article
            key={`${item.school}-${item.date}`}
            className="rounded-2xl border border-white/10 bg-slate-900/55 p-5 shadow-xl shadow-slate-950/15 sm:p-6"
          >
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">{item.date}</p>
            <h3 className="mt-3 text-base font-semibold text-slate-50">{item.degree}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{item.school}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
