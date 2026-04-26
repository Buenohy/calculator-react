import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const cardVariants = tv({
  base: 'bg-(--background) shadow-(--shadow) rounded-2xl',
});

interface CardProps
  extends VariantProps<typeof cardVariants>, React.ComponentProps<'div'> {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
}

export default function Card({
  as = 'div',
  children,
  className,
  ...props
}: CardProps) {
  return React.createElement(
    as,
    {
      className: cardVariants({ className }),
      ...props,
    },
    children,
  );
}
