import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 sm:px-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <span className="signature-mark signature-mark--md text-slate-100">
            Shekhar
          </span>
          <p className="text-sm text-slate-400">(c) {year} Shekhar Ghimire</p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-slate-300 hover:border-white/25 hover:text-slate-100"
          >
            <Github size={16} />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-slate-300 hover:border-white/25 hover:text-slate-100"
          >
            <Linkedin size={16} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href={personalInfo.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-slate-300 hover:border-white/25 hover:text-slate-100"
          >
            <Twitter size={16} />
            <span className="sr-only">Twitter</span>
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-slate-300 hover:border-white/25 hover:text-slate-100"
          >
            <Mail size={16} />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
