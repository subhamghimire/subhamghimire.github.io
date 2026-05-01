import { educationData } from '@/lib/data';
import { SectionHeading } from './section-heading';
import { SectionShell } from './section-shell';

export function Education() {
  return (
    <SectionShell id="education">
      <SectionHeading eyebrow="Education" title="Academic background" />

      <div className="grid gap-4 sm:grid-cols-2">
        {educationData.map((item) => (
          <article
            key={`${item.school}-${item.date}`}
            className="rounded-xl border border-white/10 bg-slate-900/60 p-5"
          >
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-400">{item.date}</p>
            <h3 className="mt-3 text-base font-medium text-slate-100">{item.degree}</h3>
            <p className="mt-1 text-sm text-slate-300">{item.school}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
