import { experienceData } from '@/lib/data';
import { SectionHeading } from './section-heading';
import { SectionShell } from './section-shell';

export function Experience() {
  return (
    <SectionShell id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Professional Journey"
        description="Roles focused on shipping scalable products and reliable backend systems."
      />

      <ol className="relative pl-8 before:absolute before:left-[0.44rem] before:top-1 before:h-[calc(100%-0.25rem)] before:w-px before:bg-white/10 sm:pl-10 sm:before:left-[0.44rem]">
        {experienceData.map((item) => (
          <li key={`${item.company}-${item.date}`} className="relative pb-8 last:pb-0 sm:pb-10">
            <span className="absolute -left-8 top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full border border-slate-950 bg-slate-200 shadow-[0_0_0_4px_rgba(15,23,42,1)] sm:-left-10" />
            <article className="rounded-2xl border border-white/10 bg-[#111821]/65 p-5 shadow-xl shadow-black/15">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">{item.date}</p>
              <h3 className="mt-3 text-lg font-semibold text-slate-50">{item.role}</h3>
              <p className="mt-1 text-sm text-slate-200">{item.company}</p>
              <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300">{item.description}</p>
            </article>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
