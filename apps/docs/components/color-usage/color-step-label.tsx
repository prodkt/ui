import type * as React from 'react';

export const ColorStepLabel = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) => (
  <div
    className="grid grid-cols-1 items-center justify-center justify-items-center"
    {...props}
  >
    <p className="radial-mask-10 flex h-8 w-8 items-center justify-center rounded-md border bg-ghost-aa2 text-foreground text-sm">
      {children}
    </p>
  </div>
);
