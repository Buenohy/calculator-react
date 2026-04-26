import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import Text from './text';

const buttonVariants = tv({
  base: 'flex items-center justify-center rounded-xl p-3 cursor-pointer text-(--text) bg-linear-(--gradient) hover:bg-linear-(--gradient-hover) shadow-(--shadow) border-none',
  variants: {
    variant: {
      default: 'bg-(--background)',
      primary: 'bg-(--primary)',
    },
    size: {
      sm: 'p-2 text-sm',
      md: 'p-3 text-base',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

interface ButtonProps
  extends
    Omit<React.ComponentProps<typeof Text>, 'variant' | 'size'>,
    VariantProps<typeof buttonVariants> {}

export default function Button({
  variant,
  size,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <Text
      as="button"
      variant="heading"
      className={buttonVariants({ variant, size, className })}
      {...props}
    >
      {children}
    </Text>
  );
}
