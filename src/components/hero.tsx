import Link from 'next/link';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import { SectionShell } from './section-shell';

export function Hero() {
  return (
    <SectionShell id="home" className="border-t-0">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Software Engineer</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
            {personalInfo.name}
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-300 sm:text-xl">{personalInfo.role}</p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">{personalInfo.shortDescription}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-white"
            >
              Contact
              <ArrowRight size={16} />
            </Link>
            <a
              href="https://docs.google.com/document/d/12gmdpUYGvt2E6-GVZ_kg1UPUr-ohY0bfqJC9sjbsWuE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md border border-white/15 px-4 py-2 text-sm font-medium text-slate-200 hover:border-white/30 hover:text-slate-50"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="lg:col-span-4 lg:justify-self-end">
          <div className="rounded-xl border border-white/10 bg-slate-900/70 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Connect</p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-slate-300 hover:border-white/25 hover:text-slate-100"
              >
                <Github size={18} />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-slate-300 hover:border-white/25 hover:text-slate-100"
              >
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-slate-300 hover:border-white/25 hover:text-slate-100"
              >
                <Mail size={18} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
