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

      <div className="grid gap-6 lg:grid-cols-12">
        <article className="rounded-xl border border-white/10 bg-slate-900/60 p-6 lg:col-span-5">
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">Tech Stack</h3>
          <p className="mt-2 text-sm text-slate-400">Technologies I use to build production-ready applications.</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {softwareSkills.map((skill) => (
              <li
                key={skill.skillName}
                className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-slate-950 px-3 py-1.5 text-sm text-slate-200"
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
                className="rounded-xl border border-white/10 bg-slate-900/60 p-5 hover:border-white/20"
              >
                <ItemIcon size={20} className="text-slate-300" />
                <h3 className="mt-4 text-base font-medium text-slate-100">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
