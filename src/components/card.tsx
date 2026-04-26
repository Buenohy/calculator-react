import { type HTMLAttributes } from 'react';
import { cn } from '../utils/cn';

export default function Card({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'bg-(--background) shadow-[0px_11px_7px_0px_rgba(0,0,0,0.01),0px_7px_7px_0px_rgba(0,0,0,0.04),0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.26),0px_0px_2px_0px_rgba(0,0,0,0.29),0px_2px_3px_0px_rgba(255,255,255,0.06)_inset] rounded-2xl',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
