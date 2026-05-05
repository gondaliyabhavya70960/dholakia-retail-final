import clsx from 'clsx';

export default function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={clsx(
        'inline-block text-[11px] font-medium uppercase tracking-[0.22em] text-electric',
        className
      )}
    >
      {children}
    </span>
  );
}
