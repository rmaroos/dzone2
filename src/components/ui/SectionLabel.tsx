import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionLabelProps {
  children: ReactNode;
  className?: string;
  light?: boolean;
}

export function SectionLabel({ children, className, light = false }: SectionLabelProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <span className="block w-8 h-[2px] bg-dzone-yellow" />
      <span
        className={cn(
          'font-body text-[11px] font-semibold uppercase tracking-[0.2em]',
          light ? 'text-dzone-yellow' : 'text-dzone-black/60'
        )}
      >
        {children}
      </span>
    </div>
  );
}
