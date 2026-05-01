import { ReactNode } from 'react';

type SectionShellProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

export function SectionShell({ id, children, className = '' }: SectionShellProps) {
  return (
    <section id={id} className={`border-t border-white/10 ${className}`.trim()}>
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">{children}</div>
    </section>
  );
}
