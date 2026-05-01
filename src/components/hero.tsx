import Link from 'next/link';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import { SectionShell } from './section-shell';

export function Hero() {
  return (
    <SectionShell id="home" className="border-t-0">
      <div className="grid gap-10 py-8 sm:py-12 lg:grid-cols-12 lg:items-center lg:py-16">
        <div className="lg:col-span-8">
          <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-slate-50 sm:text-6xl lg:text-7xl">
            {personalInfo.name}
          </h1>
          <p className="mt-5 max-w-3xl text-lg font-medium text-slate-200 sm:text-2xl">{personalInfo.role}</p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">{personalInfo.shortDescription}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-slate-950/20 hover:bg-white"
            >
              Contact
              <ArrowRight size={16} />
            </Link>
            <a
              href="https://docs.google.com/document/d/12gmdpUYGvt2E6-GVZ_kg1UPUr-ohY0bfqJC9sjbsWuE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-white/15 bg-white/3 px-5 py-2.5 text-sm font-medium text-slate-200 hover:border-white/30 hover:bg-white/6 hover:text-slate-50"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="lg:col-span-4 lg:justify-self-end">
          <div className="rounded-2xl border border-white/10 bg-[#111821]/75 p-5 shadow-2xl shadow-black/25 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Connect</p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/3 text-slate-300 hover:border-white/25 hover:bg-white/6 hover:text-slate-100"
              >
                <Github size={18} />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/3 text-slate-300 hover:border-white/25 hover:bg-white/6 hover:text-slate-100"
              >
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/3 text-slate-300 hover:border-white/25 hover:bg-white/6 hover:text-slate-100"
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
