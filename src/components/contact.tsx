import Image from 'next/image';
import { personalInfo } from '@/lib/data';
import { SectionHeading } from './section-heading';
import { SectionShell } from './section-shell';

export function Contact() {
  return (
    <SectionShell id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something useful together."
        description="Open to collaborating on product engineering, full-stack builds, and API-focused platforms."
      />

      <div className="grid gap-6 rounded-xl border border-white/10 bg-slate-900/60 p-6 sm:grid-cols-[auto,1fr] sm:items-center">
        <div className="h-24 w-24 overflow-hidden rounded-full border border-white/10 sm:h-28 sm:w-28">
          <Image
            src="https://avatars.githubusercontent.com/subhamghimire"
            alt="github profile"
            width={160}
            height={160}
            className="h-full w-full object-cover"
            priority={false}
          />
        </div>

        <div>
          <p className="text-sm text-slate-300">Prefer email for collaboration inquiries.</p>
          <a
            href={`mailto:${personalInfo.email}`}
            className="mt-2 inline-block text-lg font-medium text-slate-100 hover:text-white"
          >
            {personalInfo.email}
          </a>
          <p className="mt-2 text-sm text-slate-400">Nepal</p>
        </div>
      </div>
    </SectionShell>
  );
}
