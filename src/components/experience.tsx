import { experienceData } from '@/lib/data';
import { SectionHeading } from './section-heading';
import { SectionShell } from './section-shell';

export function Experience() {
  return (
    <SectionShell id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Professional journey"
        description="Roles focused on shipping scalable products and reliable backend systems."
      />

      <ol className="relative ml-3 border-l border-white/10 pl-7">
        {experienceData.map((item) => (
          <li key={`${item.company}-${item.date}`} className="relative pb-10 last:pb-0">
            <span className="absolute -left-[2.05rem] top-1 h-3.5 w-3.5 rounded-full border border-white/20 bg-slate-300" />
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-400">{item.date}</p>
            <h3 className="mt-2 text-lg font-medium text-slate-100">{item.role}</h3>
            <p className="text-sm text-slate-300">{item.company}</p>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">{item.description}</p>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
