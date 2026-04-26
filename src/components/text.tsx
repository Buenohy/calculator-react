import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../utils/cn';

const textVariants = tv({
  base: 'font-sans text-(--text)', // usa a fonte Rubik e cor padrão do tema
  variants: {
    variant: {
      default: 'text-xl',
      muted: 'text-xl text-(--text-secondary)',
      heading: 'text-2xl',
      blast: 'text-3xl',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
}

export default function Text({
  as = 'span',
  variant,
  className,
  children,
  ...props
}: TextProps) {
  return React.createElement(
    as,
    {
      className: cn(textVariants({ variant }), className),
      ...props,
    },
    children,
  );
}
