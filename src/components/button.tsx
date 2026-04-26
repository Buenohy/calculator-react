import { type ButtonHTMLAttributes } from 'react';
import { tv } from 'tailwind-variants';
import Text from './text';
import { cn } from '../utils/cn';

const buttonVariants = tv({
  base: [
    'flex items-center justify-center rounded-xl p-3 cursor-pointer',
    'bg-linear-[180deg,_rgba(0,0,0,0.05)_0%,_rgba(255,255,255,0.05)_100%]',
    'hover:bg-linear-[180deg,_rgba(0,0,0,0.1)_0%,_rgba(255,255,255,0.1)_100%]',
    'shadow-[0px_11px_7px_0px_rgba(0,0,0,0.01),0px_7px_7px_0px_rgba(0,0,0,0.04),0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.26),0px_0px_2px_0px_rgba(0,0,0,0.29),0px_2px_3px_0px_rgba(255,255,255,0.06)_inset]',
    'text-(--text)',
  ],
  variants: {
    variant: {
      default: 'bg-(--background)',
      primary: 'bg-(--primary)',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary';
  className?: string;
}

export default function Button({
  variant = 'default',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <Text
      as="button"
      variant="heading"
      className={cn(buttonVariants({ variant }), className)}
      {...props}
    >
      {children}
    </Text>
  );
}
