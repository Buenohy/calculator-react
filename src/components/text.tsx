import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const textVariants = tv({
  base: 'text-white',
  variants: {
    variant: {
      default: 'text-xl',
      muted: 'text-xl text-(--text-secondary)',
      heading: 'text-2xl',
      blast: 'text-3xl',
    },
  },
});

interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
}

export default function Text({
  as = 'span',
  variant = 'default',
  className,
  children,
  ...props
}: TextProps) {
  return React.createElement(
    as,
    {
      className: textVariants({ variant, className }),
      ...props,
    },
    children,
  );
}
