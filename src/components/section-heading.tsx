type SectionHeadingProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({
  title,
  eyebrow,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <header className={`mb-10 max-w-2xl sm:mb-12 ${alignment}`.trim()}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{eyebrow}</p>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl lg:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">{description}</p> : null}
    </header>
  );
}
