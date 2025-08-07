import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section
      id={id}
      className={`min-h-screen flex items-center justify-center py-20 ${className}`}
    >
      {children}
    </section>
  );
}
