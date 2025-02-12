import { cn } from '@/lib/utils';
import type * as React from 'react';

export const ColorUsageRange = ({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) => (
  <div
    className={cn('radial-mask-10 relative mb-2 w-full', className)}
    style={{
      backgroundImage:
        'radial-gradient(ellipse at bottom, transparent, var(--ghost-aa3) -50%, var(--ghost-a1) 50%, transparent)',
    }}
    {...props}
  >
    <p className="mb-3 text-center text-sm">{children}</p>
    <div
      style={{
        height: 1,
        backgroundImage:
          'linear-gradient(to right, transparent, var(--ghost-aa1) 30%, var(--ghost-aa3) 70%, transparent)',
      }}
    />
    <div
      style={{
        width: 1,
        height: '100%',
        position: 'absolute',
        left: 0,
        transform: 'translateY(-25%), rotate(45deg)',
        backgroundImage:
          'linear-gradient(to top, transparent, var(--ghost-aa1) 30%, var(--ghost-aa12) 70%, transparent)',
      }}
    />
  </div>
);
