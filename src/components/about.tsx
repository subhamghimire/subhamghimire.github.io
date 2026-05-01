import { personalInfo, softwareSkills, whatIDo } from '@/lib/data';
import { SectionHeading } from './section-heading';
import { SectionShell } from './section-shell';

export function About() {
  return (
    <SectionShell id="about">
      <SectionHeading
        eyebrow="About"
        title="Building practical products with clean architecture."
        description={personalInfo.about}
      />

      <div className="grid gap-5 lg:grid-cols-12 lg:gap-6">
        <article className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 shadow-xl shadow-slate-950/15 sm:p-6 lg:col-span-5">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">Tech Stack</h3>
          <p className="mt-3 text-sm leading-6 text-slate-400">Technologies I use to build production-ready applications.</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {softwareSkills.map((skill) => (
              <li
                key={skill.skillName}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/80 px-3 py-1.5 text-sm text-slate-200 shadow-sm shadow-slate-950/20"
              >
                {skill.skillName}
              </li>
            ))}
          </ul>
        </article>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {whatIDo.map((item) => {
            const ItemIcon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-slate-900/55 p-5 shadow-xl shadow-slate-950/15 hover:border-white/20 hover:bg-slate-900/75"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/3">
                  <ItemIcon size={20} className="text-slate-200" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-slate-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
